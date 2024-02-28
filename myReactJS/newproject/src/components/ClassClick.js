import React, { Component } from 'react'

export class ClassClick extends Component {
    

    clickHandler() {
        console.log('click the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick

//event handler in class component
