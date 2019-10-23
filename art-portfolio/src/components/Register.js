import React from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';



  class Register extends React.Component {
    constructor(props){
      super(props);
        this.state = {
          credentials: {
            username: '',
            password: ''
          }
        };
    };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Register");

    AxiosWithAuth()
    .post( 'https://art-po-bw.herokuapp.com/register', {
      "username": e.username,
      "password": e.password
    })
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      // this.props.history.push('/profile')
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
  
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
  
            <div className='input-fields'>

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
              <button>Log In</button>
            </div>
  
          </form>
        </div>
      </div>
    )
    }
  }

  export default Register;