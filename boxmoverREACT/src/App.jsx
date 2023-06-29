import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [xNum, setXNum] = useState(1)
  const [yNum, setYNum] = useState(1)
  const y = { marginTop: `${yNum}px` }
  const x = { marginInline: `${xNum}px` }
  const object = <div className="object" style={Object.assign({}, x, y)}></div>

  const toMoveNeg = (param) => {
    if(param <= 0) return param = 1;
    if(param >= 85) return param = 80;
    return param - 10;
  }
  const toMovePos = (param) => {
    if(param <= 0) return param = 1;
    if(param >= 85) return param = 80
    return param + 10;
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div id="container">
      <div>{object}</div>
      </div>
      <div> 
        <button onClick={()=> setYNum(toMoveNeg(yNum))}>UP</button>
        <button onClick={()=> setYNum(toMovePos(yNum))}>DOWN</button>
        <button onClick={()=> setXNum(toMoveNeg(xNum))}>LEFT</button>
        <button onClick={()=> setXNum(toMovePos(xNum))}>RIGHT</button>
      </div>
    </>
  )
}

export default App
