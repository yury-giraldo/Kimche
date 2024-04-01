/*import { useState } from 'react'*/
/*import reactLogo from './assets/react.svg'*/
import './App.css'
import Button from './components/button'


function App() {

  return (
    <>
      <div>
        <h1>Rick and Morty</h1>
        <p className="read-the-docs">
          Busca tu personaje favorito
        </p>
        <Button name = "Buscar" />
      </div>
      
    </>
  )
}

export default App
