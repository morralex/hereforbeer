import React, { Component } from "react";
import { getQuestions } from "./Question"

class Triva extends Component {
    state = {
        val: []
    }


shuffle = () => {

    let pickedQuestion = getQuestions[Math.floor(Math.random() * 10 )]
    .then(pickedQuestion => this.setState({ val: pickedQuestion }))

}


    render() {
        console.log(this.state.val)
        return (
            
                <div class="row">
                    <div class="col s12">
                        <div class="card-panel blue-grey">
                            
                        </div>
                    </div>
                </div>
        
        );
    }
}

export default Triva;