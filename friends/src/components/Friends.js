import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { getData, deleteFriend } from '../actions/actions'


class Friends extends React.Component {
  state = {
    deletingFriend: null,
    editingFriendId: null
  }

 componentDidMount() {
   this.props.getData()
 }


 logout = e => {
  e.preventDefault()
  localStorage.removeItem('token')
  this.props.history.push('/login')
}


removeFriend = id => {
  this.setState({ deletingFriendId: id });
  this.props.deleteFriend(id);
};

render() {
  if(this.props.fetchingFriends) {
    return <h1>Loading...</h1>
  }
  console.log('PROPS from FRIENDS:', this.props.friends)
  return(
    <div> 
      <Link to='/post'>Post Friend</Link>
      <button type="button" onClick={this.logout}>Logout</button>
    <div>
      {this.props.friends.map( friend => {
      return (
         <div className="friends-card" key={friend.id}>
          
                <h3>{friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
                {this.props.deletingFriend &&
                this.state.deletingFriendId === friend.id && (
                  <p>Deleting Friend 👋</p>
                )}
        
          <i
             className="fas fa-times"
             onClick={() => this.removeFriend(friend.id)}
          />
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
    fetchingFriends: state.friendsReducer.fetchingFriends,
    deletingFriend: state.friendsReducer.deletingFriend
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    { getData, deleteFriend }
  )(Friends)
)





