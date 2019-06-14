import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import AddFriendButton from "./components/AddFriendButton";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      selectedFriend: ""
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
      .put(
        `http://localhost:5000/friends/${this.state.selectedFriend.id}`,
        friend
      )
      .then(response => {
        console.log(response);
        this.setState({
          friendsList: response.data,
          selectedFriend: ""
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
          selectedFriend: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  selectFriend = friend => {
    this.setState({
      selectedFriend: friend
    });
  };

  render() {
    if (!this.state.friendsList) {
      return <div>Loading....</div>;
    }

    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <FriendsList
              {...props}
              {...this.state}
              select={this.selectFriend}
              delete={this.deleteFriend}
            />
          )}
        />
        <Route exact path="/" component={AddFriendButton} />
        <Route
          exact
          path="/modifyfriends"
          render={props => (
            <AddFriendForm
              {...props}
              postFriend={this.postFriend}
              putFriend={this.putFriend}
              selectedFriend={this.state.selectedFriend}
              {...this.state}
            />
          )}
        />
      </div>
    );
  }
}
