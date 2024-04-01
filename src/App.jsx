/*import { useState } from 'react'*/
/*import reactLogo from './assets/react.svg'*/
import './App.css'
import Search from './components/search'
import Button from './components/button'
import Cards from './components/cards'
import Filters from './components/filters'
import Pagination from './components/pagination'



function App() {

  return (
    <>
      <div>
        <h1>Rick and Morty</h1>
        <p className="read-the-docs">
          Busca tu personaje favorito
        </p>
        <Search></Search>
        <Button name = "Buscar" />
        <Filters></Filters>
        <Button name = "Reset" />
        <Cards></Cards>
        <Pagination></Pagination>
      </div>
      
    </>
  )
}

export default App
