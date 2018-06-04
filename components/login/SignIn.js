import React, {Component} from "react"
import Mysign from "./MySignComponent"

export default class SignIn extends Component {
    state  = {loggedUserName:"Guest"};
    render() {
        return <div>
            <b>Welcome {this.state.loggedUserName}</b>
            <Mysign heading="Sign In" onSingIn={this.handleSignIn}/>
            </div>
    }

    handleSignIn = (uname) => {
       this.setState({loggedUserName:uname});
       //console.log("Parent component", uname);
    } 
}