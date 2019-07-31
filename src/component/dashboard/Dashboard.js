import React, {useState, useEffect} from 'react'
import GetDataHook from '../hooks/GetDataHook'
import UserCard from '../dashboard/UserCard'

export default function Dashboard(props) {
    const [data, setData] = useState([]);
    const user = localStorage.getItem("Username")
const apiData = GetDataHook('users/'+user);
useEffect(() => {
    setData(apiData);
    console.log(data)
});
    console.log(props)
    return (
        <div>
            <UserCard data={data}></UserCard>
            <hr></hr>
        </div>
    )
}
