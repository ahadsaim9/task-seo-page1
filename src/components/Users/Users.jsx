import { useState, useEffect } from "react";
import User from "../User/User";
import "../../../public/user.json";

const Users = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("/public/user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="overflow-hidden px-2 flex flex-col gap-3">
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default Users;
