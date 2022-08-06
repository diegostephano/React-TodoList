import React from "react";

const TodoSearch= ({searchValue, setSearchValue}) => {
    
    const onSearch = (event) => {
        setSearchValue(event.target.value);
        // console.log(event.target.value);
    };
    return (
        <>
            <input type="text" placeholder="Busqueda" value={searchValue}
            onChange={onSearch}  />

            <p>{searchValue}</p>
        </>

    );
}

export default TodoSearch;