import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  Navbar,
  Nav
} from 'react-bootstrap'

import Home from './component/Home';
import Login from './component/Login';
import ResturantList from './component/ResturantList';
import ResturantDetail from './component/ResturantDetail';
import ResturantSearch from './component/ResturantSearch';
import ResturantCreate from './component/ResturantCreate';
import ResturantUpdate from './component/ResturantUpdate';
import Protected from './component/Protected';
import Logout from "./component/Logout";
import Signup from "./component/Signup";


function App() {
  return (
    <div className="App">

      <Router>
        {/* <Route exact path='/'>
          <Home />
        </Route> */}

        <Protected exact path='/' component={Home}/>

        {/* <Route path='/list'>
          <ResturantList />
        </Route> */}

        <Protected exact path='/list' component={ResturantList}/>

        {/* <Route path='/create'>
          <ResturantCreate />
        </Route> */}

        <Protected exact path='/create' component={ResturantCreate}/>

        {/* <Route path='/search'>
          <ResturantSearch />
        </Route> */}

        <Protected exact path='/search' component={ResturantSearch}/>

        {/* <Route path='/detail'>
          <ResturantDetail />
        </Route> */}

        <Protected exact path='/detail' component={ResturantDetail}/>

        <Route exact path='/logout'>
          <Logout />
        </Route>

        <Route exact path='/signup'>
          <Signup />
        </Route>

        <Route path='/update/:id'
        render={props=>(
          <ResturantUpdate {...props}/>
        )}>
         </Route>

         <Route path='/login'
        render={props=>(
          <Login {...props}/>
        )}>
         </Route>

      </Router>

    </div>
  );
}

export default App;
