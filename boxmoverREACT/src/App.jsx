import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [xNum, setXNum] = useState(100)
  const [yNum, setYNum] = useState(100)
  const y = { marginTop: `${yNum}px` }
  const x = { marginInline: `${xNum}px` }
  const object = <div className="object" style={Object.assign({}, x, y)}></div>

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div id="container">box
      <div>{object}</div>
      </div>
      <div> 
        <button onClick={()=> setYNum((yNum)=> yNum - 10)}>UP</button>
        <button onClick={()=> setYNum((yNum)=> yNum + 10)}>DOWN</button>
        <button onClick={()=> setXNum((xNum)=> xNum - 10)}>LEFT</button>
        <button onClick={()=> setXNum((xNum)=> xNum + 10)}>RIGHT</button>
      </div>
    </>
  )
}

export default App
