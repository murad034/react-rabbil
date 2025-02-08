import React from "react";
import Menu from "../component/Menu";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { userID, userName } = useParams();

  return (
    <div>
      <h2>{userID}</h2>
      <h2>{userName}</h2>

      <Menu />
      <h1>This is the profile page</h1>
    </div>
  );
};

export default ProfilePage;
