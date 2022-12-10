import axios from 'axios';
import { useRef, useContext } from 'react';
import { AppContext } from '../services/Provider';

export default function SearchBar ({link}) {
    const inputSpecie = useRef(null);
    const inputStatus = useRef(null);
    const[dataApi, setDataApi] = useContext(AppContext);

    const search = async () => {

        const specieValue = inputSpecie.current.value;
        const statusValue = inputStatus.current.value;

       await axios.get(link)
        .then(response => {
            const charactersBySpecie = response.data.results.filter((e) => e.species === specieValue);
            const charactersByStatus = response.data.results.filter((e) => e.status === statusValue);
            console.log(charactersBySpecie.length);
            if(charactersBySpecie.length !== 0){
                setDataApi(charactersBySpecie);
            }
            if(charactersByStatus.length !== 0){
                setDataApi(charactersByStatus);
            }
            if(charactersByStatus.length === 0 && charactersBySpecie.length === 0){
                setDataApi(response.data.results);
            }
        })

    }

    return (
        <div className='container'>
            <label className='form-label'> Filtrar por especie: </label>
            <input className="form-control" ref={inputSpecie} type="text" placeholder='Ingrese una especie:'/>
            <br/>
            <label className='form-label'> Filtrar por Estado de Vida: </label>
            <input className="form-control" ref={inputStatus} type="text" placeholder='Ingrese un estado:'/>
            <button className='btn btn-primary' onClick={() => search()}>Buscar</button>

        </div>
    )
}