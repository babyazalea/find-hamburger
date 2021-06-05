import React from "react";
import { useParams } from "react-router-dom";

const UserBurgers = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>{userId} user burger</h1>
    </div>
  );
};

export default UserBurgers;
