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


import React, { useState } from 'react';
// import Card from './Components/Card.js';

const App = () => {
// const odeljenje =[{ime: "medina" , prezime:"licina", godine:"16"}, {ime:"dzemila", prezime:"mulic", godine:"16"},{}, {}, {}];

// {odeljenje.map((el) =>
//   <Card></Card>)}



const [mojbroj, setMojBroj] = useState(5);

const [inputValue, setInputValue] = useState("");

const [djak, setDjak] = useState("Mehmed");

const 

  return (
<div className='container'>
  {/* <input
onChange={(e) => setDjak(e.target.value)}
value={djak}>

</input>
<button onClick={()=> alert(`selam $(djak)`)}>hello</button> */}
<input
placeholder='dodaj broj'
value={noviBroj}
onChange={(e) => setNoviBroj (e.target.value)}>
  </input>
  <button onClick={() => setBroj((prev) => [...prev, noviBroj]) }>dodaj broj</button>

</div>



//     <div className='container'>
//       {/* {mojbroj}
//       <button 
//       onClick={()=> 
//         setMojBroj((prev => prev -5))
//       }>
// promeni broj  */}</div>

// <input
// onChange={e} => 
  );
}

      {/* </button>
    </div>
  

    } */}





  //   <div>
  //     <Card ime ={"Iman"} datum={"14.12"}/>
  //     <Card ime= {"najda"} datum={"8.6"}/>
  //     <Card ime ={"sara"} datum={"14.12"}/>
  //     <Card ime= {"ema"} datum={"8.6"}/>
  //     <Card ime ={"hana"} datum={"14.12"}/>
  //     <Card ime= {"emina"} datum={"8.6"}/>
      
  //   </div>
  // );


export default App;
//  nauciti kako raditi sa imputima i stejt sta je virtuelni dom hukovi su funcije koje su vec napravljene u reactu najvise se koristi usestate