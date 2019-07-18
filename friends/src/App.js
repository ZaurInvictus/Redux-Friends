import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './PrivateRoute'
import PostFriend from './components/PostFriend'

function App() {
  return (
   <div className="App">
     <ul className='navbar'>
       <li>
         <Link to='/login'>Login</Link>
       </li>
       <li>
         <Link to='/protected'>Protected Page</Link> 
       </li>
     </ul>
     <Route exact path='/login' component={Login} />
     <PrivateRoute 
      exact path='/protected' 
      component={Friends}
     /> 
    <Route 
       exact path='/post' 
       component={PostFriend} 
     />
   </div>
  )
}

export default App;

