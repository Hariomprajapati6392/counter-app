import React, { useState } from 'react'

const CounterApp = () => {
  const [count ,setCount]=useState(0)
  return (
    <div className='container'>
      <h3>Value is {count}</h3>
      <h4>Number is {count%2==0?count===0?"Zero":"Even":"Odd"}</h4>
      <div className='btn-box'>
      <button onClick={()=>setCount(count+1)}>Increment</button>
       <button onClick={()=>setCount(count-1)}>Decrement</button>
      </div>
     <button onClick={()=>setCount(0)} id='reset'>Reset</button>     
     
    </div>
  )
}

export default CounterApp;

