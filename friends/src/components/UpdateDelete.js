// import React from 'react'
// import { connect } from 'react-redux';
// //import { updateFriend } from '../actions/actions';

// class UpdateDelete extends React.Component {
//    state = {
//       name:'',
//       age: '',
//       email: '',
//       errorMessage: null
//    }
  
//      handleInputChange = (e) => {
//       this.setState({
//         [e.target.name]: e.target.value
//       })
//      }

//      updateFriend = (e) => {
//         e.preventDefault()
//         const id = this.props.match.params.id
//         const { name, age, height } = this.state
//         const payload = { name, age, height }
//       }

//     //  deleteSmurf = (e) => {
//     //   e.preventDefault()
//     //   const id = this.props.match.params.id

//     //   axios.delete(`http://localhost:3333/smurfs/${id}`)
//     //      .then(res=> {
//     //        this.setState({
//     //          errorMessage: null
//     //        })
//     //        this.props.updateSmurfs(res.data)
//     //        this.props.history.push('/')
//     //      })
//     //      .catch(err => {
//     //       this.setState({
//     //         errorMessage: err.message
//     //       })
//     //      })
//     //  }

//    render() {
//      const id = this.props.match.params.id
//      const friend = this.props.friends.find(friend => `${friend.id}` === id)
//      if(!friend) {
//        return <div>Loading...</div>
//       }

//     return (

//       <div className="friend-page-wrapper"> 
//        <div className="friend-page-card">
//          <h3>{friend.name}</h3>
//          <strong>{friend.email} </strong>
//          <p>{friend.age}</p>
//        </div>
//           <div className="friendForm">

//           <form onSubmit={this.updateFriend}>

//            <p>{this.state.errorMessage}</p>

//             <input
//              type='text'
//               onChange={this.handleInputChange}
//               placeholder="name"
//               value={this.state.name}
//               name="name"
//             />
//             <input
//              type='number'
//               onChange={this.handleInputChange}
//               placeholder="age"
//               value={this.state.age}
//               name="age"
//             />
//             <input
//              type='number'
//               onChange={this.handleInputChange}
//               placeholder="height"
//               value={this.state.height}
//               name="height"
//             />
//             <div>
//               <button type="submit">Edit</button>
//               {/* <button type="button" onClick={this.deleteFriend}>Delete</button> */}
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//    }
// };


// const mapStateToProps = state => {
//   console.log(state)
//   return {
//     error: state.friendsReducer.error,
//     postFriend: state.friendsReducer.postingFriend
//   };
// };


// export default connect(
//   mapStateToProps,
//   { updateFriend }
//   )(UpdateDelete);

