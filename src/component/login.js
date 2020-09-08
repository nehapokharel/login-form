import React from 'react';
import '../assets/login.css';
import * as LoginActionCreator from '../action/auth';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

class Login extends React.Component{

  constructor(props){
    super(props);
      this.state={
        user:{},
        nameError: "",
        passwordError:""
      }
    }
    
    
  render(){
    return (
      <div className="App">
        <div className="card">
          <p className="title">Login Form</p>
          <form onSubmit={this.validateForm}>
            <div>
              <input placeholder="Enter name" type="text" value={this.state.user.name || ''} onChange={(event)=>this.handleNameChange(event)}/>
                <p style={{color:"red"}}>{this.state.nameError}</p>
            </div>
            <div className="form-group">
              <input placeholder="Enter password" type="password" value={this.state.user.password || ''} onChange={(event)=>this.handlePaswordChange(event)}/>  
              <p style={{color:"red"}}>{this.state.passwordError}</p>
            </div>  
            <button onClick= {(event)=>this.handleUpload(event)}>Login</button>
          </form>
        </div>     
      </div>
    );
  }

  handleNameChange(event){
    this.setState({
      user:{
        ...this.state.user,
        name: event.target.value,
      },
      nameError:""
    })
  }

  handlePaswordChange(event){
    this.setState({
      user:{
        ...this.state.user,
        password: event.target.value
      },
      passwordError:""
    })
  }

  validateForm(){
    let nameError="", passwordError=""
    if(!this.state.user.name){
      nameError = "Name is required"
    }
    if(nameError){
      this.setState({nameError});
      return false;
    }
    if(!this.state.user.password){
      passwordError = "Password is required"
    }
    if(passwordError){
      this.setState({passwordError});
      return false;
    }
    return true
  }

  handleUpload(event){
    event.preventDefault();
    if(this.validateForm()){
      this.props.userLogin(this.state.user);
      this.props.history.push('/home');
    } 
  }6
}

function mapStateToProps(state){
  return {
      ...state
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(LoginActionCreator, dispatch);
}

const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginComponent;