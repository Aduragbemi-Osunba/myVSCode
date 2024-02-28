import React, {Component} from "react";

class Team extends Component{

    constructor(){
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }
    changeMessage() {
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    render() {
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>)
    }
}
export default Team;

/*this is a clear example of how state can be used in class component;
 state can be changed within the component
and can influence what is rendered in the browser.
this is a clear syntax of what to do when adding attributes.
also note that if the msg were to be sent from app.js as a property, it wont work bacause
props are immutable ie it cant be changed from the message component. Hence the need FOR STATE component */