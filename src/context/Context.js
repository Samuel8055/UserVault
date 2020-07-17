import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  // const [myUser, setUser] = useState([]);

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const getUser = (userId) => {
    let tempUsers = [...users];
    let user = tempUsers.find((user) => user.id === userId);
    return user;
    // setUser(user);
  };

  return (
    <UserContext.Provider value={{ users, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
