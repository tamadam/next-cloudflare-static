"use client";

import { useEffect, useState } from "react";

interface User {
  id: string;
  username: string;
}

interface UserResponse {
  users: User[];
}

const Input = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log("Search value has changed: " + searchValue);
    const fetchData = async () => {
      const users: UserResponse = await fetch(
        `https://dummyjson.com/users/search?q=${searchValue}`
      ).then((response) => response.json());

      console.log(users);
      setUsers(users.users);
    };

    fetchData();
  }, [searchValue]);

  return (
    <>
      <h1>Search for users</h1>
      <input
        type="text"
        name="query"
        id="query"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        value={searchValue}
      />
      <h1>Users found</h1>
      {users.map((user) => (
        <p key={user.id}>{user.username}</p>
      ))}
    </>
  );
};

export default Input;
