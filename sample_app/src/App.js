import React from 'react'
import Card from "./Card_new";
import Button from './button';
import Student from './Student';
import UserGreeting from './UserGreeting';

function App() {
  return(
    <>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Button/>
    <Student name = 'Lijo' age={34} isStudent ={true}/>
    <Student name = 'Reshma' age={27} isStudent ={false}/>
    <Student name = 'Sijo' age={24} isStudent={true}/>
    <Student name = 'Amal'/>
    <UserGreeting isLoggedIn={false} username='To React Devloper Tutorial'/>
    </>
  );
}
export default App;




