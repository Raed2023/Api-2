import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      setUsers(data);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div className="user-container">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          {users.map((el) => (
            <div className="user-card" key={el.id}>
              <h2>Name : {el.name}</h2>
              <h2>Username: {el.username}</h2>
              <p>Email: {el.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
