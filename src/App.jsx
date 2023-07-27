import { useEffect, useState } from "react";
import './App.css'


function App() {
  const [users, SetUsers] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => SetUsers(json))
    },[])

  return (
    <>
      <div>
       {users.map((user)=> <div className="card" key={user.id}>
          <h2>User {user.id}</h2>
          <p>Name - {user.name}</p>
          <p>Email - {user.email}</p>
          <p>Address - {user.address.city}</p>
          <p>Phone - {user.phone}</p>
       </div>)}
      </div>
    </>
  )
}

export default App