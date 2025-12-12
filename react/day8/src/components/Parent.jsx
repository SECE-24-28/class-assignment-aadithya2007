import React from 'react'

function Parent(props) {
    const[fruits,setFruits]=React.useState(["mango","banana","apple"]);
  return (
    <div><h4>gift from app: {props.gift}</h4>
    <button onClick={()=>{
        props.giftFromChild(fruits);
    }}>send gift</button>
    </div>

  )
}

export default Parent