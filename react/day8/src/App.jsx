import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent';

function App() {

 const [fName, setfName] = useState("harry");
 const [gift, setGift] = useState("PS5"); 
 const[data,setData]=useState([]);
 const giftFromChild=(data)=>{
   console.log("gift from child:",data);
    setData(data);
 }
  return (
    <>
      <h1>welcome to react session</h1>
      <h2>Hello,{fName}</h2>
      <button onClick={() => setfName("rohan")}>Change Name</button>
     {data.map((val,index)=>{
      return <li>{val}</li>;
     })}
      <Parent gift={gift} giftFromChild={giftFromChild} />
    </>
  )
}

export default App
