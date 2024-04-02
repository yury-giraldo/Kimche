import Button from "./button";
import React, { useState } from "react";



const Search = ({setSearchQuery}) => {

    const [query, setQuery] = useState("");



    const hsearch = (e) => {
        e.preventDefault();

        setSearchQuery(query);
        setQuery("");
    }

    return(
        <>
        <div className='container w-full mt-5 mb-5 p-5 h-auto'> 
            <form className="columns-5 flex justify-center"  onSubmit={hsearch} >
                <input className="bg-blanco form-control w-1/2 rounded-md mx-5 pl-5"
                type="text"
                placeholder="Busca el personaje"
                name="searchTx"
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
                />
                <Button name = "Buscar" />
            </form>
        </div>
        </>
    )

}

export default Search;