import React from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

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
    .post('/auth/login', this.state.credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.message.split(' ')[2])
    })
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

      <div className='form'>
        <form onSubmit={this.handleSubmit}>

          <div className='input-fields'>

            <input
                type='text'
                name='username'
                value={this.username}
                onChange={this.handleChange}
                placeholder='Username'
              />

            <input
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