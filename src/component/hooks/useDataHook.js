import { useState, useEffect } from "react";

/**
* Custom hook to get data from API-endpoints
* @param url parameters from props.match.params
* @return resolved json-data from API-endpoint
*/
export default function useDataHook(parameters) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/" + parameters)
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return data;
}