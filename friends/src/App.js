import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'

import Login from './components/Login'
import Friends from './components/Friends'
import PostFriend from './components/PostFriend'
//import UpdateDelete from './components/UpdateDelete.js'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <ul className='navbar'>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
        </ul>
        <Route exact path='/login' component={Login} />
        <PrivateRoute
         exact path='/friends'
         component={Friends}
        />
       <Route
          exact path='/post'
          component={PostFriend}
        />
        {/* <Route
          path='/smurfs/:id'
          updateDelete={UpdateDelete}
        /> */}
      </div>
     )
   }
}

export default App;
