import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (uName, uAge) => {
    setUsers((prev) => [
      ...prev,
      { name: uName, age: +uAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
