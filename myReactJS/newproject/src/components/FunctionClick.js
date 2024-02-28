import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Button click")
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick


/*react event uses camel case,
you pass a function as event handler instead of string
event handler is a function and not a function call so do not add ()*/
