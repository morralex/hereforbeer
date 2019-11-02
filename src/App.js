import React, { Component } from 'react';
import BoardTwo from "./components/Board/BoardTwo"
import Banner from "./components/Banner/Banner"
import './App.css';
import PubNubReact from 'pubnub-react';
import Swal from "sweetalert2";
import shortid from 'shortid';

class App extends Component {
  constructor(props) {
    super(props);
    // REPLACE with your keys
    this.pubnub = new PubNubReact({
      publishKey: "pub-c-7ad97da2-e9c7-4fbf-b13c-45c67453d696",
      subscribeKey: "sub-c-8a109564-fa3f-11e9-a301-7a3b1591b90a"
    });

    this.state = {
      currentPlayer: '', // X or O
      isPlaying: false, // Set to true when 2 players are in a channel
      isRoomCreator: false,
      isDisabled: false,
      myTurn: false,
      // score1: 0,
      // score2: 0,
    };

    this.lobbyChannel = null; // Lobby channel
    this.gameChannel = null; // Game channel
    this.roomId = null; // Unique id when player creates a room   
    this.pubnub.init(this); // Initialize PubNub
  }

  componentWillUnmount() {
    this.pubnub.unsubscribe({
      channels: [this.lobbyChannel, this.gameChannel]
    });
  }

  componentDidUpdate() {
    // Check that the player is connected to a channel
    if (this.lobbyChannel != null) {
      this.pubnub.getMessage(this.lobbyChannel, (msg) => {
        // Start the game once an opponent joins the channel
        if (msg.message.notRoomCreator) {
          // Create a different channel for the game
          this.gameChannel = 'tictactoegame--' + this.roomId;
          console.log(this.gameChannel);
          this.pubnub.subscribe({
            channels: [this.gameChannel]

          });

          this.setState({
            isPlaying: true
          });

          // Close the modals if they are opened
          Swal.close();
        }
      });
    }
  }


  // Create a room channel
  onPressCreate = (e) => {
    // Create a random name for the channel
    this.roomId = shortid.generate().substring(0, 5);
    this.lobbyChannel = 'tictactoelobby--' + this.roomId;

    this.pubnub.subscribe({
      channels: [this.lobbyChannel],
      withPresence: true // Checks the number of people in the channel
    });

    Swal.fire({
      position: 'top',
      allowOutsideClick: false,
      title: 'Share this room ID with your friend',
      text: this.roomId,
      width: 275,
      padding: '0.7em',
      // Custom CSS to change the size of the modal
      customClass: {
        heightAuto: false,
        title: 'title-class',
        popup: 'popup-class',
        confirmButton: 'button-class'
      }
    })
    this.setState({
      currentPlayer: 'X',
      isRoomCreator: true,
      isDisabled: true, // Disable the 'Create' button
      myTurn: true, // Player X makes the 1st move
    });
  }

  // The 'Join' button was pressed
  onPressJoin = (e) => {
    Swal.fire({
      position: 'top',
      input: 'text',
      allowOutsideClick: false,
      inputPlaceholder: 'Enter the room id',
      showCancelButton: true,
      confirmButtonColor: 'rgb(208,33,41)',
      confirmButtonText: 'OK',
      width: 275,
      padding: '0.7em',
      customClass: {
        heightAuto: false,
        popup: 'popup-class',
        confirmButton: 'join-button-class',
        cancelButton: 'join-button-class'
      }
    }).then((result) => {
      // Check if the user typed a value in the input field
      if (result.value) {
        this.joinRoom(result.value);
      }
    })
  }

  // Join a room channel
  joinRoom = (value) => {
    this.roomId = value;
    this.lobbyChannel = 'tictactoelobby--' + this.roomId;

    // Check the number of people in the channel
    this.pubnub.hereNow({
      channels: [this.lobbyChannel],
    }).then((response) => {
      console.log(response)
      if (response.totalOccupancy < 2) {
        this.pubnub.subscribe({
          channels: [this.lobbyChannel],
          withPresence: true
        });

        this.setState({
          currentPlayer: 'O',
        });

        this.pubnub.publish({
          message: {
            notRoomCreator: true,
          },
          channel: this.lobbyChannel
        });
        console.log(response)
      }
      else {
        // Game in progress
        Swal.fire({
          position: 'top',
          allowOutsideClick: false,
          title: 'Error',
          text: 'Game in progress. Try another room.',
          width: 275,
          padding: '0.7em',
          customClass: {
            heightAuto: false,
            title: 'title-class',
            popup: 'popup-class',
            confirmButton: 'button-class'
          }
        })
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  // Reset everything
  endGame = () => {
    this.setState({
      currentPlayer: '',
      isPlaying: false,
      isRoomCreator: false,
      isDisabled: false,
      myTurn: false,
    });

    this.lobbyChannel = null;
    this.gameChannel = null;
    this.roomId = null;

    this.pubnub.unsubscribe({
      channels: [this.lobbyChannel, this.gameChannel]
    });
  }

  render() {
    return (
      <div>
        {
          !this.state.isPlaying &&
          <div className="row valign-wrapper center-align">
            <div className="col">
            
                <div className="row">Here for Beer...the game</div>
                <div className="row">

                  <div className="button-container">
                    <button
                      className="create-button "
                      disabled={this.state.isDisabled}
                      onClick={(e) => this.onPressCreate()}
                    > Create
                  </button>


                    <button
                      className="join-button"
                      onClick={(e) => this.onPressJoin()}
                    > Join
                  </button>

               
                </div>
              </div>
            </div>
          </div>
        }
        {
          this.state.isPlaying &&
          <Banner />
        }
        {
          this.state.isPlaying &&
          <BoardTwo
            pubnub={this.pubnub}
            gameChannel={this.gameChannel}
            currentPlayer={this.state.currentPlayer}
            isRoomCreator={this.state.isRoomCreator}
            myTurn={this.state.myTurn}
            Username1={this.state.Username1}
            Username2={this.state.Username2}
            endGame={this.endGame}
            // score1={this.state.score1}
            // score2={this.state.score2}
          />
        }
      </div>
    );
  }
}


export default App;