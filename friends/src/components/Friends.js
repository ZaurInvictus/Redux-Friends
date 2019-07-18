import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
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
      <Link to='/post'>Post Friend</Link> 
    <div>
      {this.props.friends.map( friend => {
      return (
         <div className="friends-card" key={friend.id}>
          <h4>Name: {friend.name}</h4>
           <p>Age: {friend.age}</p>
           <p>Email: {friend.email}</p>
          </div>
        )
      })}
    </div>
  
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