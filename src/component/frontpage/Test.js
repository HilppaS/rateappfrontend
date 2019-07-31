import React, { useEffect, useState } from 'react'
import useDataHook from '../hooks/useDataHook';

export default function Test(props) {
    const url = props.match.path
    const [data, setData] = useState([])
    const apiData = useDataHook(url);
    useEffect(() => {
        setData(apiData)
        
        return () => {
        };
    },)
    console.log(data)
    console.log(props)
    return (
        <div>
        </div>
    )
}

