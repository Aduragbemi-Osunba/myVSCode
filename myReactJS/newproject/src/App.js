import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Team from './components/Team';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Indexx from './components/Indexx';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
    {/*  <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/*<Inline/>
     {/* <Stylesheet primary = {true}/>
     {/* <Indexx/>
      {/*<NameList/>
      

      
      {/*<UserGreeting/>
    {/*  <ParentComponent/>
     {/*} <EventBind/>
      {/*<ClassClick/>
      <FunctionClick/>
      {/*<Counter/>
      <Team/>
      <Greet name = "Tiana" heroName =  "BatLady">
        <p>This is children props</p>
      </Greet>
      <Greet name = "Lizzy" heroName = "superWoman">
        <button>Action</button>
        </Greet>
      <Greet name = "Bella" heroName =  "wonderWoman"/>
      <Hello></Hello>
      <Message></Message>
     <Welcome name = "Tiana" heroName =  "BatLady"/>
     <Welcome name = "Lizzy" heroName = "superWoman"/>
     <Welcome name = "Bella" heroName =  "wonderWoman"/>*/}
      
    </div>
  );
}

export default App;
