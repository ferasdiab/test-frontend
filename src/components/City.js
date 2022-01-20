import React , {useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

export default function City() {
    const [oneCity , setOneCity] = useState(null)
    //const {id} = useParams();
    const id  = useParams().id
    console.log(id);

useEffect(async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/city/${id}`
  );
  console.log(res.data);
  setOneCity(res.data)
}, []);
  return (
    <>
      {oneCity !== null ? (
        <div>
          <h1>{oneCity.name}</h1>
          <p>{oneCity.desc}</p>
          <img src={oneCity.url} />
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}
