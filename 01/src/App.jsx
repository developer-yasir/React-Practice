import { useState } from 'react'

import './App.css'

function App() {
const [count, setCount] =useState(0);

const Increment = ()=>{
  setCount(count+1)
}
const Decrement = ()=>{
  count > 0 ? setCount(count-1) : setCount(count);

}

  return (
<>
<h2>{count}</h2>

<button onClick={Increment}>+</button>
<button onClick={Decrement}>-</button>


</>
  )
}

export default App
