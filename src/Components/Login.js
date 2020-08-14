import React, { createRef } from 'react';
import { flash } from '../helper/notification';
const privateData=require('../assets/Data/Users.json')
class Login extends React.Component{
    constructor(props){
        super(props)
        this.usernameRef=createRef();
        this.passwordRef=createRef();
    }
    findUser(username,password){
        console.log(username,password)
            for(let user in privateData){
                if(privateData[user].name===username){
                    if(privateData[user].password!==password)
                        throw new Error('Password doen\'t match');
                    return privateData[user];
                }
            }
            throw new Error('User Doesn\'t exist');
    }
    submitLogin=(e)=>{
            try{
            let username=this.usernameRef.current.value;
            let password=this.passwordRef.current.value;
            let user=this.findUser(username,password)
            this.props.successfullLogin(user);
            }catch(e){
                flash(e.message);
            }
            
    }
    render(){
        
            return(
                <div className="login-container">
                        <h2>Login</h2>
                        <input className="login-input"  type="text" ref={this.usernameRef} required  placeholder="username"/>
                        <input className="login-input" type="password" ref={this.passwordRef} required placeholder="password"/>
                        <button className="login-submit" value="submit" type="submit" onClick={this.submitLogin}>submit</button>
                </div>
            )
    }
}

export default Login;
