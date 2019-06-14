import React from "react";
import { NavLink } from "react-router-dom";
import { Paper, IconButton } from "@material-ui/core";
class FriendCard extends React.Component {
  selectFriend = e => {
    this.props.select(this.props.friend);
  };

  removeFriend = e => {
    this.props.delete(this.props.friend.id);
  };

  render() {
    return (
      <Paper elevation={10} className="paper">
        <NavLink
          to="/modifyfriends"
          onClick={this.selectFriend}
          className="cardBox"
        >
          <h1>{this.props.friend.name}</h1>
          <h2>{this.props.friend.age}</h2>
          <p>{this.props.friend.email}</p>
          <IconButton onClick={this.removeFriend}>
            <i class="fas fa-trash" />
          </IconButton>
        </NavLink>
      </Paper>
    );
  }
}

export default FriendCard;
