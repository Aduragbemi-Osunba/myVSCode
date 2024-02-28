import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
    }}
  render() {

  /*TERNARY OPERATOR*/  return(
        this.state.isLoggedIn?
        <div>Welcome Aduragbemi</div> :
        <div>Welcome Guest</div>
    )

  /*ELEMENT VARIABLE  let message
    if(this.state.isLoggedIn) {
        message = <div>Welcome Aduragbemi</div>
    } else {
        message = <div>Welcome Guest</div>
    }
    return <div>{message}</div>

    
   /*IF/ELSE METHOD if(this.state.isLoggedIn) {
        return <div>Welcome Aduragbemi</div>
    }else {
        return <div>Welcome Guest</div>
    }

   /* return (
      <div>
        <div>Welcome Aduragbemi</div>
        <div>Welcome Guest</div>
      </div>
   )*/
  }
}

export default UserGreeting

/*Conditional Rendering
if/else in react js. if im logged in, it should show true and welcome Aduragbemi
but if im not, it should show be changed to false and welcome guest will pop up in the browser.if/else dont
work inside JSx, because jsx works for function codes and object construction

Element Variable: this involves using javascript to store element. letmessage is the variable which 
stores an element to be rendered

Ternary conditional operator: it can be used inside the jsx, it keeps the code simple and readable

Short circuit operator:*/
