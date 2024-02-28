import React from 'react'

function NameList() {
    const persons = [
       { id: 1,
        name: 'Tiana',
        age: 30,
        skill: 'React'
},
 {     id: 2,
    name: 'Lizzy',
    age: 35,
    skill: 'Angular'
},
{
    id: 3,
        name:'Bella',
        age: 15,
        skill: 'vue'
}]
    const personList = persons.map(person => (
        <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>))
    
  return <div>{personList}</div>
}

export default NameList

/*this involves creating an array of names using the array index.
this is a clear example of using map method(javascipt code) to render the list of names*/