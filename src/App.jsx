// import { useState,version } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React{version}</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import Person from "./components/Person.jsx";
// import NetflixSeries from "./components/NetflixSeries.jsx";

// const Footer = () => {
//   return (
//     <p>Copyright@2025</p>
//   );
// };


import React from "react";
// import NetflixSeries from "./components/NetflixSeries";
// import Events from "./components/Events";
// import State from "./components/hooks/State";
// import image from "./assets/image.webp";
// import nature from "./assets/nature.jpg";


// const App = () => {
//   return (
//     <div className="card-container">
//       <NetflixSeries
//       image={image} 
//       name="Yoyoo" 
//       rating="9.6"/>
//       <NetflixSeries
//       image={nature}
//        name="Yoyoo"
//         rating="8.6"/>
//       <NetflixSeries
//       image="vite.svg" 
//       name="Yoyoo" 
//       rating="8.0"/>
      
//       <Events />
//       <State />
//       <h2>Footer Section</h2>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import Todo from "./components/Projects/Todo";
const App = () =>{
  return(
    <>
    <Todo />
    </>
  );
};

export default App;