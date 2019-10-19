import React, { Component, useState } from 'react';
import { Form, Field, withFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

import LoginImage from './LoginImage';
import Logo from '../assets/portrait.jpg';
import '../styles/Login.scss';


const Login = ({ errors, touched, values, status }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return(

  <div className='login-form'>

    <LoginImage />

    <div className='form'>
      <Form>
        <label className='username-label'>
          Username
        </label>

      <div className='avatar'>
        <img src={Logo} alt='avatar' className='avatar'/>
      </div>

        <div className='input-fields'>
          <Field
              className='username'
              component='input'
              type='text'
              name='username'
              placeholder='Username'
            />

          <Field
            className='password'
            component='input'
            type='password'
            name='password'
            placeholder='Password'
          />
        </div>

        <div className='input-btn'>
          <button>Log In</button>
        </div>
      </Form>
    </div>
  </div>
  );
}
// class Login extends React {


//   render(){
//     return(

//     )
//   }
// }

const formik = withFormik({
  mapPropsToValues({ username, password}) {

    return{
      username: username || '',
      password: password || ''
    };
  }
})

const LoginWithFormik = formik(Login)
export default LoginWithFormik;