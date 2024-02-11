//import {Switch, Route, Redirect} from 'react-router-dom'
import LoginComponent from './components/Login/LoginComponent';
//import HeaderComponent from './components/Header/HeaderComponent';
//import HomeComponent from './components/Home/HomeComponent';
//import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';


function App() {
  // <Switch>
  //   <Route exact path="/login" component={LoginComponent} />
  //   <ProtectedRoute exact path="/" component={HomeComponent} />
  //   {/* <ProtectedRoute exact path="/jobs" component={Jobs} />
  //   <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
  //   <Route exact path="/not-found" component={NotFound} />
  //   <Redirect to="/not-found" /> */}
  // </Switch>
  return(
    <LoginComponent/>
  )
}

export default App;
