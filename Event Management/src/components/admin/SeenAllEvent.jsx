import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function SeenAllEvent() {
  const [view, setView] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get('http://localhost:8080/userDetails/list', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((result) => {
      setView(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [token]);

  

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {view.map((res) => (
        <div key={res.id} style={{ height: "400px", width: "300px", backgroundColor: "hotpink", padding: "10px", borderRadius: "8px" }}>
          <h3>Name: {res.name}</h3>
          <p>Email: {res.email}</p>
          <p>Username: {res.username}</p>
          <p>Role: {res.role}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => handleDelete(res.id)}>Delete</button>
            <Link to={`/update/${res.id}`}>
              <button>Update</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeenAllEvent;
