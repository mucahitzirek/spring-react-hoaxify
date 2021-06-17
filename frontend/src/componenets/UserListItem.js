import React from "react";
import { Link } from "react-router-dom";
import ProfilImageWithDefault from "./ProfilImageWithDefault";

const UserListItem = (props) => {
  const { user } = props;
  const { username, displayName, image } = user;

  return (
    <Link
      to={`/user/${username}`}
      className="list-group-item list-group-item-action"
    >
      <ProfilImageWithDefault
        className="rounded-circle"
        width="32"
        height="32"
        alt={`${username} profile`}
        image={image}
      />
      <span className="pl-2">
        {displayName}@{username}
      </span>
    </Link>
  );
};

export default UserListItem;
