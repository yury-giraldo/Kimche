import Button from "./button";
const Search = () => {

    return(
        <>
        <div className='container w-full mt-5 mb-5 p-5 h-auto'> 
            <form className="columns-5 flex justify-center" >
                <input className="bg-blanco form-control w-1/2 rounded-md mx-5 pl-5"
                type="text"
                placeholder="Busca el personaje"
                name="searchTx"
                autoComplete="off"
                />
                <Button name = "Buscar" />
            </form>
        </div>
        </>
    )

}

export default Search;