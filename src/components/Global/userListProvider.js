import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserListContext = createContext();

const UserListContextProvider = (props) => {
  const [UserList, setUserList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/users`);
    setUserList(response.data);
  };


  return (
    <UserListContext.Provider value={UserList}>
      {props.children}
    </UserListContext.Provider>
  );
};

export default UserListContextProvider;
