import React, { Component, useState } from 'react';
import { Form, Field, withFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

import '../styles/Login.scss';


const Login = ({ errors, touched, values, status }) => {

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return(
    <div className='login-form'>
      <Form>
        <label className='username-input'>
          Username
        </label>

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
        <button>Log In</button>
      </Form>
    </div>
  )
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