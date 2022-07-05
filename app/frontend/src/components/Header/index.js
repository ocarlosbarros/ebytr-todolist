import React, { useState } from 'react';
import Button from '../Button';
import SearchBar from '../SearchBar';
import { addTaskApi } from '../../services/serviceApi';

function Header() {
    const [search, setSearch ] = useState('');

    const handleChange = ({ target: { value }}) => {
        setSearch(value);
    }

    const addTask = async (search) =>   {
        await addTaskApi(search);
        setSearch('');
    }
    
    return (
        <header>
            <h2>EBYRT</h2>
        <SearchBar search={ search } onChange={ handleChange } />
        <Button name="btn-add" value="adicionar"onSubmit={ addTask } />
        </header>
    )
}

export default Header;