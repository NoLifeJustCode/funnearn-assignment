import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
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
