import React from "react";

const Greet = (props) => {
    console.log(props)
    return (
    <div>
    <h1>Hello {props.name} a.k.a {props.heroName}
    </h1>
    {props.children}
    </div>)

}


export default Greet;

/*FUNCTIONAL COMPONENT : the syntax used for greeting more one than person on browser,
 adding a second attribute and 
lastly enclosing our content in a "div tag" because Jsx should only contain one html 
element*/