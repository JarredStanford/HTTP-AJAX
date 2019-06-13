import React from "react";

export default class AddFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.postFriend({
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    });
    this.setState(() => this.initialState);
  };

  updateFriend = e => {
    e.preventDefault();
    const selectedFriend = this.props.friendsList.find(
      friend => friend.id === this.props.selectedID
    );
    this.props.putFriend({
      name: this.state.name || selectedFriend.name,
      age: Number(this.state.age) || Number(selectedFriend.age),
      email: this.state.email || selectedFriend.email
    });
    this.setState(() => this.initialState);
    //If I update a field, that input will not get set to it's original state. I also tried the normal setState to "". Can't figure it out.
  };

  render() {
    const selectedFriend = this.props.friendsList.find(
      friend => friend.id === this.props.selectedID
    );
    return (
      <form onSubmit={this.addFriend}>
        <input
          placeholder="Name"
          onChange={this.handleChanges}
          defaultValue={
            this.props.selectedID === "" ? this.state.name : selectedFriend.name
          }
          //Using default value so it will auto submit the original data when a name is selected/updated but nothing is entered into the name field.
          name="name"
          required
        />
        <input
          placeholder="Age"
          onChange={this.handleChanges}
          defaultValue={this.props.selectedID === "" ? "" : selectedFriend.age}
          name="age"
          type="number"
        />
        <input
          placeholder="Email"
          onChange={this.handleChanges}
          defaultValue={
            this.props.selectedID === "" ? "" : selectedFriend.email
          }
          name="email"
          type="email"
        />
        <button>Add Friend</button>
        <button onClick={this.updateFriend}>Update</button>
      </form>
    );
  }
}
