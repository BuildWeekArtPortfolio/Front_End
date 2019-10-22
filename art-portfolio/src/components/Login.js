import React from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

import LoginImage from '../components/LoginImage';
import Logo from '../assets/portrait.jpg';
import '../styles/Login.scss';

class Login extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        credentials: {
          username: '',
          password: ''
        }
      };
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("something");

    AxiosWithAuth()
    .post('/login', '')
    .then(res => console.log('LOGIN2 > AXIOSWITHAUTH', res))
    .catch(err => console.log('UNABLE TO POST REQUEST', err))
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

      <LoginImage />

      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          {/* <label className='username-label'>
            Username
          </label> */}

        <div className='avatar'>
          <img src={Logo} alt='avatar' className='avatar'/>
        </div>

          <div className='input-fields'>
            <input
                className='username'
                // component='input'
                type='text'
                name='username'
                value={this.username}
                onChange={this.handleChange}
                placeholder='Username'
              />

            <input
              className='password'
              // component='input'
              type='password'
              name='password'
              placeholder='Password'
              value={this.password}
              onChange={this.handleChange}
            />
          </div>

          <div className='input-btn'>
          <button>Log In</button>
          </div>

        </form>
      </div>
    </div>
  )
  }
}

export default Login;