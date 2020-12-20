import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import Schedule from './components/Schedule/Schedule';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <PrivateRoute path="/schedule">
          <Schedule></Schedule>
        </PrivateRoute>
        <Route exact path="/">
            <Login></Login>
        </Route>
        <Route path="/home">
            <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
