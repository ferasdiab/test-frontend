import React from 'react'
import { Link } from "react-router-dom";

export default function OneCity({name,description,url,id}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={url}/>
            <Link to={`/city/${id}`}>show more</Link>
        </div>
    )
}
