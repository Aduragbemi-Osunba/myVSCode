import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)

        this.state ={
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter


/* never modify the state directly because react wont render the component
instead use setState to modify the state, it will let react know it has to render the component*/