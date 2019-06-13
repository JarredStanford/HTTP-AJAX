import React from "react";

class Friend extends React.Component {
  selectFriend = e => {
    this.props.select(this.props.friend.id);
  };

  removeFriend = e => {
    this.props.delete(this.props.friend.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.selectFriend}>{this.props.friend.name}</button>
        <h2>{this.props.friend.age}</h2>
        <p>{this.props.friend.email}</p>
        <button onClick={this.removeFriend}>Remove friend</button>
      </div>
    );
  }
}

export default Friend;
