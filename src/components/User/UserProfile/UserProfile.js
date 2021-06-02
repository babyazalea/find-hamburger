import React from "react";

import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h3>{userId}</h3>
    </div>
  );
};

export default UserProfile;
