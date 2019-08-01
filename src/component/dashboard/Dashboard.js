import React, { useState, useEffect } from "react";
import GetDataHook from "../hooks/GetDataHook";
import UserCard from "./UserCard";
import UserStatistic from "./UserStatistic";
import UserRecentPosts from "./UserRecentPosts";
import axios from "axios";

export default function Dashboard(props) {
  const [data, setData] = useState([]);
  const user = localStorage.getItem("Username");
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/content/me/" + user + "?page=0&size=10")
      .then(res => setData(res.data.content))
      .then(console.log(data));
  }, []);
  console.log(props);
  return (
    <div>
      <UserCard data={data} />
      <hr />
      <UserStatistic data={data} />
      <hr />
      <UserRecentPosts data={data} />
    </div>
  );
}
