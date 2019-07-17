import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getData } from '../actions/actions'


class Friends extends React.Component {

 componentDidMount() {
   this.props.getData()
 }

render() {
  if(this.props.fetchingFriends) {
    return <h1>Loading...</h1>
  }
  console.log('PROPS from FRIENDS:', this.props.friends)
  return(
    <div>
      {this.props.friends.map( friend => {
      return (
       <div key={friend.id}>
         <h2>{friend.name}</h2>
         <h2>{friend.age}</h2>
         <h2>{friend.email}</h2>
       </div>
      )
      })}
    </div>
  )
 }
}

const mapStateToProps = state => {
  console.log('STATE form FRIENDS', state)
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(Friends)
)