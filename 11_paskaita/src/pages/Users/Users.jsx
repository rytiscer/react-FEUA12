import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <div className="userCards">
        {users.map((user) => (
          <div key={user.id} className="userCard">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <Link to={`/user/${user.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
