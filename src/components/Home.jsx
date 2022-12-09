import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import { AppContext } from '../services/Provider';


export default function Home() {

    const[dataApi, setDataApi] = useContext(AppContext);
    const [pageNumber, setPageNumber] = useState(0);

    let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    useEffect(() => {
        if(pageNumber == 0){
         axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => {
            setDataApi(response.data.results);
            console.log(dataApi)})
        } else {
            axios.get(url)
            .then(response => {
                setDataApi(response.data.results);
                console.log(dataApi)})
        }
    },[url])

    
    let next = () => {
        if(pageNumber == 0){
            return setPageNumber(1);
        } else {
            return setPageNumber(prevState => prevState +1)
        }
    }

    let prev = () => {
        if(pageNumber == 1 || pageNumber == 0) return setPageNumber(1);
        return setPageNumber(prevState => prevState -1)
    }



    return (
        <div>
             <div className='container-fluid mt-4'>
               <button className="btn btn-light" onClick={prev}>Prev</button>
               <button className="btn btn-primary" onClick={next}>Next</button>
             </div>
             {dataApi != null ? dataApi.map((dato, i)  => <Card data={dato} key={i} />) : <h1>No funciona</h1>}
        </div>
    )
}
