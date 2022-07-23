import React, { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

const UserResult = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // import replace loading

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  
  if (loading) {
   return( <Spinner />)
  }
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map(users => 
        (<h3>{users?.login}</h3>)
      )}
    </div>
  );
};

export default UserResult;
