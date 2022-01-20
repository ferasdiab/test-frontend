import React, { useState, useEffect } from "react";
import axios from "axios";
import OneCity from "./OneCity";

export default function Cities() {
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [url, seturl] = useState("");
  const [cities, setcities] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/city`);
    console.log(res.data);
    setcities(res.data);
  }, []);

  const nameChange = (e) => {
    setname(e.target.value);
  };

  const urlChange = (e) => {
    seturl(e.target.value);
  };

  const descChange = (e) => {
    setdesc(e.target.value);
  };

  const addCity = async () => {
    try {
      if (name === "" || desc === "" || url === "") {
        setErrMsg("must enter all data");
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/city`,
          {
            cityName: name,
            cityDesc: desc,
            cityUrl: url,
          }
        );
        console.log(res.data);
        // const copy = [...cities]
        // copy.push(res.data);
         setcities(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => {
          nameChange(e);
        }}
      ></input>
      <input
        onChange={(e) => {
          descChange(e);
        }}
      ></input>
      <input
        onChange={(e) => {
          urlChange(e);
        }}
      ></input>

      <button
        onClick={() => {
          addCity();
        }}
      >
        Add City
      </button>
      <h1>{errMsg}</h1>
      {cities.map((element) => {
        return (
          <OneCity
            key={element._id}
            name={element.name}
            description={element.desc}
            url={element.url}
            id={element._id}
          />
        );
      })}
    </div>
  );
}
