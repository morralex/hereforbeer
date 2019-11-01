import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { withRouter } from "react-router"

class Nav extends Component {
    // state = {  }
    render() {
        return (<nav>
            <div class="nav-wrapper blue darken-4">
                <a href="#" class="brand-logo">Here for Beer</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    {/* <div className={this.props.authenticated ? "nav-link active" : "hide"}>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign up</a></li>
                        
                    </div>
                    <div className={this.props.authenticated ? "hide" : "nav-link active"}>
                        <li><a href="#">Logout</a></li>
                    </div> */}
                </ul>
            </div>
        </nav>);
    }
}

export default Nav;