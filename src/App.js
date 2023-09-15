// import logo from './logo.svg';
// import './App.css';
// import Card from './components/card';

// function App() {
//   return ( 
//   <div>

//   <Card />
//   </div>
    
//   );
// }

// export default App;


import React from 'react';
// import Card from './Components/Card.js';

const App = () => {
const odeljenje =[{ime: "medina" , prezime:"licina", godine:"16"}, {ime:"dzemila", prezime:"mulic", godine:"16"},{}, {}, {}];

{odeljenje.map((el) =>
  <Card></Card>)}





  return (
    <div>
      <Card ime ={"Iman"} datum={"14.12"}/>
      <Card ime= {"najda"} datum={"8.6"}/>
      <Card ime ={"sara"} datum={"14.12"}/>
      <Card ime= {"ema"} datum={"8.6"}/>
      <Card ime ={"hana"} datum={"14.12"}/>
      <Card ime= {"emina"} datum={"8.6"}/>
      
    </div>
  );
}

export default App;
