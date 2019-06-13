import React from "react";
import axios from "axios";

import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      selectedID: ""
      //selectedID allows us to send data from Friend back to FriendsList and then down to Form.
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({
          friendsList: response.data
        });
      })
      .catch(err => console.log(err));
  }

  postFriend = newFriend => {
    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(response => {
        console.log(response);
        this.setState({
          friendsList: response.data
        });
      })
      .catch(err => console.log(err));
  };

  putFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${this.state.selectedID}`, friend)
      .then(response => {
        console.log(response);
        this.setState({
          friendsList: response.data,
          selectedID: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          friendsList: response.data,
          selectedID: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  selectFriend = id => {
    this.setState({
      selectedID: id
    });
  };

  render() {
    if (this.state.friendsList === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {this.state.friendsList.map(friend => {
          return (
            <Friend
              friend={friend}
              key={friend.id}
              select={this.selectFriend}
              delete={this.deleteFriend}
            />
          );
        })}
        <AddFriendForm
          postFriend={this.postFriend}
          putFriend={this.putFriend}
          selectedID={this.state.selectedID}
          {...this.state}
        />
      </div>
    );
  }
}

export default Friends;
