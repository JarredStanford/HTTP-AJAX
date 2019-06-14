import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const AddFriendButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/modifyfriends"
    >
      Add Friend
    </Button>
  );
};

export default AddFriendButton;
