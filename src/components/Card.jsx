import React from 'react';

export default function Card({data}) {
    console.log(data);

        return ( 
        <div style={{display: 'inline-block'}}>
             <div className="card m-4 p-2" style={{width: '18rem'}}>
                <img src={data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title text-black">{data.name}</h5>
                <p className="card-text text-black"></p>
                </div>
            </div>
        </div>
        )
    }