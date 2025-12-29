import { useEffect, useState } from "react";
import "./App.css";
import axiosInstance from "./api.jsx";

function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axiosInstance.get("/");

     
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axiosInstance.delete(`/delete-emp/${id}`);

      if (!response.data.isError) {
        getAllUsers(); // refresh list
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <h1>User List</h1>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name}
              <button onClick={() => deleteUser(user._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
