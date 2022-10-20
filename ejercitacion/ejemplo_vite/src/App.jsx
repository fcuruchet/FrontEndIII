import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const saludo = () =>{
    alert('Hola Vite');
  }
  return (
    <div className="App">
      <h1>Pero vo' so loco Vite'</h1>
      <img src="https://github.com/Ivanszs/dh-frontend3-clases/blob/master/clase-4/satisfied.png?raw=true" alt="hola"/>
      <div>
        <button id='saluda' onClick={saludo}>Saludame</button>
      </div>
    </div>
  )
}

export default App
