import React from 'react'
import './MyStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
//what this implies is that if the primary is true, then orange color shld pop & if is false color shld be blank
 
return (
    <div>
  {/* <h1 className = {className} > Stylesheets </h1> syntax for a normal font*/}
    <h1 className ={'$ {className} font-xl'} > Stylesheets </h1>
    </div>
  )
}

export default Stylesheet

