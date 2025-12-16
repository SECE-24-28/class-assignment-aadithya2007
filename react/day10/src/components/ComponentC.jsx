import React from 'react'
import { Consumer } from '../context/context-api.jsx';
function ComponentC() {
  return (
    <div className="box"><h1>Component C</h1>
     <Consumer>
        {(value)=>{
            return <h2>Value from Context API is : {value}</h2>
        }
        }
     </Consumer>
    </div>
  )
}

export default ComponentC