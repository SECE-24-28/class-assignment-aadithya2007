import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import ComponentA from './components/ComponentA';
import { Provider } from './context/context-api.jsx';


function App() {
  const[name,setName]=useState("Dhoni");

  return (
    <>
    <Provider value={name}>
      <div>
        <ComponentA />
      </div>
    </Provider>
    </>
  )
}

export default App
