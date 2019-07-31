import { useState, useEffect } from "react";
import axios from "axios";

/**
* Custom hook to get data from API-endpoints
* @param url parameters from props.match.path
* @return resolved promise/json-data from API-endpoint
*/
export default function useDataHook(parameters) {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("Token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/" + parameters, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log(res)
        setData(res.data)
      })
  }, []);

  return data;
}