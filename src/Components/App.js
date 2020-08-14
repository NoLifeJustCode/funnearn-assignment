import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
/**
 * The App has 2 main routes 
 * public : if user not logged in is available else redirect to home page
 * private: available when logged in 
 */
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      login:{
        isLogin:false,
        user:{
          
        }
      }
    }
  }
/**
 * Sets the logged In status with the user data
 */
  successfullLogin=(user)=>{
    this.setState((state)=>{
      return {
        login:{
          isLogin:true,
          user
        }
      }
    })
  }

  render(){
    const loginProps={
      successfullLogin:this.successfullLogin
    }
  return (
    <div className="App">
     <Router>
       
       <PrivateRoute component={Home} path="/home" exact login={this.state.login.isLogin} state={{user:this.state.login.user}}/>
       <PublicRoute component={Login} path="/" exact login={this.state.login.isLogin} state={loginProps}/>
     </Router>
    </div>
  );
  }
}

export default App;
