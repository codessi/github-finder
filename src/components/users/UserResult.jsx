import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "../UserItem";
import GithubContext from "../../context/github/GithubContext";

const UserResult = () => {
  const { users,loading, fetchUsers } = useContext(GithubContext)


  useEffect(() => {
    fetchUsers();
  }, []);

  
  if (loading) {
   return( <Spinner />)
  }
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map(users => 
        <UserItem key = {users.id} users={users}/>
      )}
    </div>
  );
};

export default UserResult;
