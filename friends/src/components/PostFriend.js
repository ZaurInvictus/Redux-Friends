import React from 'react';
import { connect } from 'react-redux';
import { postFriend } from '../actions/actions';

class PostFriend extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }


  postFriendHandler() {
    const {name, age, email} = this.state
    this.props.postFriend({ name, age, email })
    this.setState({ name: '', age: '', email: '' });
    this.props.history.push('/friends')
  }


  render() {
    return (
      <form className="post-form">
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleChange }
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="number"
          placeholder="Age"
          onChange={this.handleChange }
        />
        <input
          className="input"
          value={this.state.email}
          name="email"
          type="text"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <button onClick={() => this.postFriendHandler()} type="button">
          Add New Friend
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    error: state.friendsReducer.error,
    postFriend: state.friendsReducer.postingFriend
  };
};


export default connect(
  mapStateToProps,
  { postFriend }
  )(PostFriend);
