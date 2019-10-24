import React from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';
// import Axios from 'axios';


  class Register extends React.Component {
    constructor(props){
      super(props);
        this.state = {
          credentials: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
          }
        };
    };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Register");

    AxiosWithAuth()
    .post( '/auth/register', {
      // "firstName": this.state.firstName,
      // "lastName": this.state.lastName,
      // "email": this.state.email,
      "username": this.state.credentials.username,
      "password": this.state.credentials.password
    })
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
    })
    .catch(err => console.log('REGISTER > UNABLE TO POST REQUEST', err))
  }

  handleChange = e => {
    this.setState({
      credentials: {...this.state.credentials,
      [e.target.name]: e.target.value}
    })
  }

  render(){
    return(
      <div className='login-form'>
        {
          console.log(this.state.username, this.state.password)
        }
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
  
            <div className='input-fields'>

              <input
                  className='first-name'
                  type='text'
                  name='firstName'
                  value={this.firstName}
                  onChange={this.handleChange}
                  placeholder='First Name'
                />
              <input
                  className='lastName'
                  type='text'
                  name='lastName'
                  value={this.lastName}
                  onChange={this.handleChange}
                  placeholder='lastName'
                />
              <input
                  className='email'
                  type='text'
                  name='email'
                  value={this.email}
                  onChange={this.handleChange}
                  placeholder='email'
                />
              <input
                  className='username'
                  type='text'
                  name='username'
                  value={this.username}
                  onChange={this.handleChange}
                  placeholder='Username'
                />

              <input
                className='password'
                type='password'
                name='password'
                placeholder='Password'
                value={this.password}
                onChange={this.handleChange}
              />
            </div>
  
            <div className='input-btn'>
              <button>Sign Up</button>
            </div>
  
          </form>
        </div>
      </div>
    )
    }
  }

  export default Register;