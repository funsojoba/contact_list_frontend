import Login from './pages/login/login';
import SignUp from './pages/register/register';
import Home from './pages/home/index';
import Contact from './pages/contacts/contacts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NotFound from './pages/notFount';
import UserProfile from './pages/user';
import DetailPage from './pages/contacts/detail';

import ProtectedRoute from './protected.route';

import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>

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

              <ProtectedRoute path="/contacts" exact component={Contact} />
              <ProtectedRoute path="/user" exact component={UserProfile} />
              <ProtectedRoute path="/detail" exact component={DetailPage} />

              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
    </Provider>
  );
}

export default App;
