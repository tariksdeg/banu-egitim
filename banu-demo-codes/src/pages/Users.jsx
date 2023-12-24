import axios from "axios";
import React, { useEffect, useState } from "react";
import UserComponent from "../components/UserComponent";

const Users = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const getUsers = async () => {
    try {
      let result = await axios.get("http://192.168.1.131:8000/api/login/");
      if (result.data.success) {
        setData(result.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(`error ==>`, error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getUsers();
  }, []);

  return (
    <div className="mt-5">
      {isLoading && <div className="text-center">Loading...</div>}
      {!isLoading && data && <UserComponent data={data} />}
    </div>
  );
};

export default Users;
