import React, {Component} from "react";

class Welcome extends Component{
    render() {
        return<h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}
export default Welcome;

/*CLASS COMPONENT: the syntax used for greeting more one than person on browser,
 adding a second attribute*/
