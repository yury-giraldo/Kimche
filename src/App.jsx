/*import { useState } from 'react'*/
/*import reactLogo from './assets/react.svg'
import './App.css'*/
import React, { useState } from "react";
import Search from './components/search'
import Filters from './components/filters'
import Cards from './components/cards'
import Button from './components/button'
import Pagination from './components/pagination'
import { Icon } from '@iconify/react'
import imagen from './assets/rick.png'
import { useQuery, gql } from "@apollo/client";

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  const GET_CHARACTERS = gql`
  query Characters($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        type
        location {
          id
          name
        }
        origin {
          id
          name
          dimension
        }
        image
      }
    }
  }
`;

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      filter: { },
      page: 1,
    },
  });
  console.log(data);
  console.log(searchQuery);

  return (
    <>
      <div className='container mx-auto'>
        <div className='columns-1 w-full mt-5 mb-10 p-5 h-5 flex justify-center'>
          <a href="https://www.linkedin.com/in/yury-giraldo/" className='text-white' target="_blank"><Icon icon="line-md:linkedin" width="30" height="30" className='mx-4'/></a>
          <a href="https://github.com/yury-giraldo" className='text-white' target='_blank'><Icon icon="line-md:github-loop" width="34" height="34" className='mx-4'/></a>
          <a href=" yury-giraldo.github.io/Yury-Dev/ " className='text-white' target='_blank'><Icon icon="line-md:person-search" width="34" height="34"className='mx-4'/></a>          
        </div>
        <div className='columns-1 w-auto h-auto mt-5 mb-10 p-5 h-auto flex justify-center'> 
          <img alt="gallery" className="w-1/2 h-auto" src={imagen}/>
        </div>
      
        <Search setSearchQuery= {setSearchQuery} />

        <div className='columns-1 w-auto h-auto mt-5 mb-10 p-5 h-auto flex justify-center'>
          <Filters />
          <Filters />
          <Filters />  
          <Button name = "Reset" />        
        </div>
        <Cards />
        <Pagination />
        
      </div>
      
    </>
  )
}

export default App
