import React, { Component } from "react";
import FriendsList from "./components/FriendsList";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
      </div>
    );
  }
}
