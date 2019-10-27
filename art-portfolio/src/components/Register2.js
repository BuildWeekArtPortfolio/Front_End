import React, { useState, useEffect } from 'react';
import  { withFormik, Form, Field } from 'formik'; 
import * as yup from 'yup';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';
import styled from 'styled-components';
import axios from 'axios';

const StyledForm = styled(Form)`
    background-image: linear-gradient(175deg, #003452, #00131F);
    width: 380px;
    max-width: 100%;
    height: auto;
    margin: 50px auto;
    padding: 100px 30px;
    box-sizing: border-box;
    box-shadow: 5px 10px 15px rgb(95, 99, 102, 0.3);
    border-radius: 3px;
    `

const Title = styled.h1`
    font-size: 1.5rem;
    color: rgb(242,242,242);
    font-family: 'Raleway';
    text-align: center;
    font-weight: 500;
`

const SubTitle = styled.h2`
    font-size: 0.9rem;
    margin-bottom: 50px;
    color: #AD9100;
    font-weight: lighter;
    font-family: 'Raleway';
    text-align: center;
`

const StyledField = styled(Field)`
    display: block;
    height: 50px;
    width: 318px;
    margin: 18px 0px;
    border-radius: 2px;
    border: 1px solid lightgrey;
    padding: 15px;
    box-sizing: border-box;
    background-color: rgb(242,242,242);
    font-family: 'Raleway';
    ::placeholder {
        color: rgb(24,38,40, 1);
        font-family: 'Raleway';
    }
`

const StyledButton = styled.button`
    height: 50px;
    width: 318px;
    margin: 30px 0;
    border-radius: 2px;
    background-image: linear-gradient(75deg, #AD9100, #FFD500);
    border: 1px solid #FFD500;
    color: rgb(24,38,40, 1);
    text-transform: uppercase;
    font-weight: 800;
    font-family: 'Raleway';
    font-size: 0.8rem;
`
const StyledP = styled.p`
    color: #FFD500;
    font-family: 'Raleway';
    font-size: 0.7rem;
    margin: 0;
    padding: 0;
`

const Register2 = ({ errors, touched, status }) => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        if (status) {
            setMembers([...members, status])
        }
    }, [status])

return (
    <div>
        <StyledForm className="signup-form">
            <i class="fas fa-palette"></i>
            <Title>Register</Title>
            <SubTitle>Join the Community</SubTitle>
            {touched.username && errors.username && <StyledP className="error">{errors.username}</StyledP>}
            <StyledField 
                name="username"
                type="text"
                placeholder="Username"
                />
            {touched.password && errors.password && <StyledP className="error">{errors.password}</StyledP>}
            <StyledField
                name="password"
                type="password"
                placeholder="Password"
                />
            <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
    </div>
)
}

export default withFormik({
    mapPropsToValues: (values) => {
        return{
            username: values.username || '',
            password: values.password || '',
        }
    },
    validationSchema: yup.object().shape({
        username: yup
          .string()
          .min(1)
          .max(40)
          .required("Username is required."),
        password: yup
          .string()
          .min(6)
          .max(40)
          .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
          .required("Password is required")
      }),
      handleSubmit: (values, { setStatus }) => {
          axios.post('/auth/register', values)
          .then(response => {
              setStatus(response.data)
              console.log("response", response)
              localStorage.setItem('token', response.data.token);
          })
          .catch(err => {
              console.log("Error:", err)
          })
      }
})(Register2);

