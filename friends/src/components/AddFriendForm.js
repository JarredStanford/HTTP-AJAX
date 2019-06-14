import React from "react";
import { Input, Button, Paper } from "@material-ui/core";
import styled from "styled-components";

export default class AddFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: Number(""),
      email: "",
      isUpdating: false
    };
  }

  componentDidMount() {
    if (this.props.selectedFriend !== null) {
      this.setState({
        name: this.props.selectedFriend ? this.props.selectedFriend.name : "",
        age: this.props.selectedFriend ? this.props.selectedFriend.age : "",
        email: this.props.selectedFriend ? this.props.selectedFriend.email : "",
        isUpdating: this.props.selectedFriend ? true : false
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedFriend.id !== prevProps.selectedFriend.id) {
      this.setState({
        name: this.props.selectedFriend ? this.props.selectedFriend.name : "",
        age: this.props.selectedFriend ? this.props.selectedFriend.age : "",
        email: this.props.selectedFriend ? this.props.selectedFriend.email : "",
        isUpdating: this.props.selectedFriend ? true : false
      });
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.postFriend(this.state);
    this.setState({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({
      name: "",
      age: Number(""),
      email: ""
    });
  };

  updateFriend = e => {
    e.preventDefault();
    this.props.putFriend({
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    });
    this.setState({
      name: "",
      age: Number(""),
      email: "",
      isUpdating: false
    });
  };

  render() {
    console.log(this.state.age);
    return (
      <Paper className="formPaper">
        <FormStyle
          onSubmit={this.state.isUpdating ? this.updateFriend : this.addFriend}
        >
          <Input
            placeholder="Name"
            onChange={this.handleChanges}
            value={this.state.name}
            name="name"
            required
          />
          <Input
            placeholder="Age"
            onChange={this.handleChanges}
            value={this.state.age}
            name="age"
            type="number"
          />
          <Input
            placeholder="Email"
            onChange={this.handleChanges}
            value={this.state.email}
            name="email"
            type="email"
          />
          <Button color="primary" type="submit">
            {this.state.isUpdating ? "Update Friend" : "Add Friend"}
          </Button>
        </FormStyle>
      </Paper>
    );
  }
}

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center
  height: 50%;
  text-align: center;
  padding: 10%;
`;
