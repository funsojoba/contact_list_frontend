import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
