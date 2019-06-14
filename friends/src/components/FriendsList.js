import React from "react";
import FriendCard from "./FriendCard";
import styled from "styled-components";

class FriendsList extends React.Component {
  modifyFriends = e => {
    e.preventDefault();
  };
  render() {
    return (
      <FriendBox>
        {this.props.friendsList.map(friend => {
          return (
            <FriendCard
              friend={friend}
              key={friend.id}
              select={this.props.select}
              delete={this.props.delete}
            />
          );
        })}
      </FriendBox>
    );
  }
}

export default FriendsList;

const FriendBox = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap
max-width: 1000px
justify-content: space-between
align-content: space-around
flex-grow: 1`;
