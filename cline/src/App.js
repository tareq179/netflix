import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Watch from './Pages/Watch/Watch';
import Register from './Pages/Register/Register';
import Login from './Pages/login/Login';

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path= "/">
          {user ? <Home/>: <Redirect to="/register"/>}
        </Route>
        <Route path= "/register">
        {!user ? <Register/>: <Redirect to="/login"/>}
        </Route>
        <Route path= "/login">
        {!user ? <Login/>: <Redirect to="/"/>}
        </Route>
        {user && (
          <>
          <Route  path= "/movies">
          <Home type="movie"/>
        </Route>
        <Route  path= "/series">
          <Home type="series"/>
        </Route>
        <Route path= "/watch">
          <Watch/>
        </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
