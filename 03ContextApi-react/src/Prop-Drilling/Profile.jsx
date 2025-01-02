import React from "react";

export const Profile = ({ user }) => {
  return (
    <>  
      <div>the user is, {user.name}</div>
      <div>the user age is, {user.age}</div>   
    </>
  );
};
