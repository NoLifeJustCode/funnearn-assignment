import React, { createRef } from 'react';
import { flash } from '../helper/notification';
const privateData=require('../assets/Data/Users.json')
/**
 * Logs in if user matches else indicates failure
 */
class Login extends React.Component{
    constructor(props){
        super(props)
        this.usernameRef=createRef();
        this.passwordRef=createRef();
    }
    /**
     * Retreive user if exits else throw appropriate errors
     * @param {*} username 
     * @param {*} password 
     */
    findUser(username,password){
    
            for(let user in privateData){
                if(privateData[user].name===username){
                    if(privateData[user].password!==password)
                        throw new Error('Password doen\'t match');
                    return privateData[user];
                }
            }
            throw new Error('User Doesn\'t exist');
    }
    /**
     * validate form for empty values and set successful login
     * or Indicate failure
     */
    submitLogin=(e)=>{
            try{
            let username=this.usernameRef.current.value;
            if(username==='')
                throw new Error('username cannot be blank')
            let password=this.passwordRef.current.value;
            if(password==='')
                throw new Error('pasword cannot be blank')
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
                        <input className="login-input"  type="text" ref={this.usernameRef}   placeholder="username"/>
                        <input className="login-input" type="password" ref={this.passwordRef}  placeholder="password"/>
                        <button className="login-submit" value="submit" type="submit" onClick={this.submitLogin}>submit</button>
                </div>
            )
    }
}

export default Login;
