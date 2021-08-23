import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';

import { FormTextInput as TextInput, FormCheckBox as CheckBox } from './VisualComponents/Inputs';
import "./Signup.css"
import Country from "./Country"

export default function SignUp() {
  

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <h1 className="create__account">1. create your account or <span> <Link component={RouterLink} to="/signin" style={{color:"orange",cursor:"pointer"}}> Log In</Link></span></h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mailerConsent: false
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .required('Required'),
            lastName: Yup.string()
            .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .required('Required')
              .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Password must contain at least one upper case character, one lower case character, one number, and must be at least 8 characters long")
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>
          <Form noValidate>
            <h6 style={{fontSize:"15px",fontWeight:"400",marginTop:"10px"}}>First Name</h6>
            <TextInput
              
              variant='outlined'
              // margin='normal'
              required
              fullWidth
              id='firstName'
              // label='First Name'
              size="small"
              name='firstName'
              autoComplete='firstName'
              autoFocus
            />
            <h6 style={{fontSize:"15px",fontWeight:"400",marginTop:"10px"}}>Last Name</h6>
            <TextInput
              variant='outlined'
              // margin='normal'
              fullWidth
              id='lastName'
              // label='Last Name'
              name='lastName'
              size="small"
              autoComplete='lastName'
            />
            <h6 style={{fontSize:"15px",fontWeight:"400",marginTop:"10px"}}>Email</h6>
            <TextInput
              variant='outlined'
              // margin='normal'
              required
              fullWidth
              id='email'
              // label='Email Address'
              size="small"
              name='email'
              autoComplete='email'
            />
            <h6 style={{fontSize:"15px",fontWeight:"400",marginTop:"10px"}}>Password</h6>
            <TextInput
              variant='outlined'
              // margin='normal'
              required
              fullWidth
              name='password'
              // label='Password'
              size="small"
              type='password'
              id='password'
            />
           <div>
             <h3 style={{fontSize:"15px",fontWeight:"400",marginTop:"10px"}}>Country</h3>
             <Country />
           </div>
            <CheckBox
              name='mailerConsent'
              checkBoxValue='mailerConsent'
              color='primary'
              label='I accept the privacy policy Terms of use & Licencing Agreement'
            />
            <Button
              style={{marginTop:"20px"}}
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              
            >
              Sign Up
            </Button>
          </Form>
        </Formik>

        {/* <Link component={RouterLink} to='/signin'>
          {'Already have an account? Sign In'}
        </Link> */}
      </div>
    </Container>
  );
}