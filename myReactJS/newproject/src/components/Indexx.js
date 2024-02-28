import React from 'react'


function Indexx() {
    const names = ['Tiana', 'Lizzy', 'Bella', 'Tiana']
    const persons = []
    const Indexx = names.map((name, index ) => 
        <h2 key =  {index}  >  {index}  {name}</h2> )
    
  return (
    <div>
      {Indexx}
    </div>
  )
}

export default Indexx

/*Index rendering is known as a last resort and its been used when;
1)the items in your list do not have a unique id
2) the list is a  static list and will not change
3) the list will never be re oredered or filtered*/