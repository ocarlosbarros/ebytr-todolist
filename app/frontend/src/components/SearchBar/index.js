import React from 'react';

function SearchBar({ search, onChange }){
    return(
        <input 
        name="search" 
        type="text" 
        value={ search } 
        onChange={ onChange } 
        />
    )
}

export default SearchBar;