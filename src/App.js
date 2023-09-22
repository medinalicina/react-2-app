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

// const App = () => {
// const odeljenje =[{ime: "medina" , prezime:"licina", godine:"16"}, {ime:"dzemila", prezime:"mulic", godine:"16"},{}, {}, {}];

// {odeljenje.map((el) =>
//   <Card></Card>)}


// const [mojbroj, setMojBroj] = useState(5);

// const [inputValue, setInputValue] = useState("");

// const [djak, setDjak] = useState("Mehmed");


    
const NekaForma= () => {
  
  const LicneInformacije = () => {
    const [text, setText] = useState(''); 
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [godine, setGodine] = useState('');
    const [visina, setVisina] = useState('');
  

 return (
   <div className='container' style={{ display:"flex" , flexDirection: 'column', }}>
   <input
    placeholder="Ime"
    value={ime}
    onChange={(e) => setIme(e.target.value)}
    />
   <input
   placeholder="Prezime"
   value={prezime}
   onChange={(e) => setPrezime(e.target.value)}
   />
     <input
     placeholder="Godine"
     value={godine}
     onChange={(e) => setGodine(e.target.value)}
     />
     <input
    placeholder="Visina"
    value={visina}
    onChange={(e) => setVisina(e.target.value)}
   />
   <button onClick={() => console.log(ime,prezime,godine,visina)}>POSALJI</button>
      </div>
    );
  };

  return (
    <div>
      <h1>POPUNI FORMU </h1>
      {/* <input
        placeholder="Unesite tekst"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> */}
      <LicneInformacije/>
    </div>
  );
};

export default NekaForma;
























  // const pisiOvde = (event) => {
  //   setText(event.target.value); // Ažuriraj tekst prema unesenom sadržaju
  // };

  // const nestonmp = (event) => {
  //   console.log('Uneseni tekst:', text);
  //   setText('');
  // };

//   return (
//     <form>
//       <label>
//         Unesite tekst:
//         <input type="text" value={text}/>
//       </label>
//       <label>
//         Unesite tekst:
//         <input type="text" value={text}
//         required/>
//       </label>
//       <label>
//         Unesite tekst:
//         <input type="text" value={text}
//         required/>
//       </label>
//       <button type=""></button>
//     </form>
//   );
// };

// export default NekaForma;
































// return (
// <div className='container'>
//   {/* <input
// onChange={(e) => setDjak(e.target.value)}
// value={djak}>

// </input>
// <button onClick={()=> alert(`selam $(djak)`)}>hello</button> */}
// <input
// placeholder='dodaj broj'
// value={noviBroj}
// onChange={(e) => setNoviBroj (e.target.value)}>
//   </input>
//   <button onClick={() => setBroj((prev) => [...prev, noviBroj]) }>dodaj broj</button>

// </div>



//     <div className='container'>
//       {/* {mojbroj}
//       <button 
//       onClick={()=> 
//         setMojBroj((prev => prev -5))
//       }>
// promeni broj  */}</div>

// <input
// onChange={e} => 
  


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


// export default App;
//  nauciti kako raditi sa imputima i stejt sta je virtuelni dom hukovi su funcije koje su vec napravljene u reactu najvise se koristi usestate