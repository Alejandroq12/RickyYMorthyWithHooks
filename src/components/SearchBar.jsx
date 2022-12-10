import React from 'react';
import { useRef } from 'react';

export default function SearchBar () {
    const inputSpecie = useRef(null);
    const inputStatus = useRef(null);

    const search = () => {

        const specieValue = inputSpecie.current.value;
        const statusValue = inputStatus.current.value;
        
    }

    return (
        <div className='container'>
            <label className='form-label'> Filtrar por especie: </label>
            <input className="form-control" ref={inputSpecie} type="text" placeholder='Ingrese una especie:'/>
            <br/>
            <label className='form-label'> Filtrar por Estado de Vida: </label>
            <input className="form-control" ref={inputStatus} type="text" placeholder='Ingrese un estado:'/>
            <button className='btn btn-primary'>Buscar</button>

        </div>
    )
}