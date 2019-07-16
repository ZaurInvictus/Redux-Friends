import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
   <div className="App">
    <h1>Friends</h1>
     <ul className='navbar'>
       <li>
         <Link to='/login'>Login</Link>
       </li>
       <li>
         <Link to='/protected'>Protected Page</Link>
       </li>
     </ul>
     <Route path='/login' component={Login} />
     <PrivateRoute 
      exact path='/protected' 
      component={Friends}
     /> 
   </div>
  )
}

export default App;

