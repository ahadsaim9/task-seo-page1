import { useState, useEffect } from "react";
import User from "../User/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("https://ahadsaim9.github.io/task-seo-p1/data.json")
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
