import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';

export default function SignIn() {
  
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div>
        {/* <Avatar>
          <LockOutlinedIcon />
        </Avatar> */}
        {/* <Typography component='h1' variant='h5'>
          Sign in
        </Typography> */}
        <h1 className="create__account">2. Don't have an account<span> <Link component={RouterLink} to="/signup" style={{color:"orange",cursor:"pointer"}}> Sign Up</Link></span></h1>

        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberUser: false
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .required('No password provided.')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>

          <Form>
          <h6 style={{fontSize:"15px",fontWeight:"400",marginTop:"10px"}}>Email</h6>
            <Field name='email'>
              {({ field, form, meta }) => (
                <TextField
                  variant='outlined'
                  // margin='normal'
                  required
                  fullWidth
                  id='email'
                  // label='Email Address'
                  size="small"
                  name='email'
                  autoComplete='email'
                  autoFocus
                  inputProps = {{...field}}
                  error = {meta.touched && typeof meta.error !== 'undefined'}
                />
              )}
            </Field>
            <h6 style={{fontSize:"15px",fontWeight:"400",marginTop:"10px"}}>Password</h6>
            <Field name='password' type='password'>
              {({ field, form, meta }) => (
              
                <TextField
                  variant='outlined'
                  // margin='normal'
                  required
                  fullWidth
                  name='password'
                  // label='Password'
                  size="small"
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  inputProps = {{...field}}
                  error = {meta.touched && typeof meta.error !== 'undefined'}
                />
                
              )}
            </Field>
            <Field name='rememberUser' type='checkbox'>
              {({ field }) => (
                <FormControlLabel
                  control={<Checkbox value='rememberUser' color='primary' inputProps = {{...field}} checked={field.value} />}
                  label='Remember me'
                />
              )}
            </Field>
           
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              
            >
              Sign In
            </Button>
            
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                {/* <Grid item>
                  <Link component={RouterLink} to='/signup'>
                    {'Don\'t have an account? Sign Up'}
                  </Link>
                </Grid> */}
              </Grid>
          </Form>
        </Formik>
      </div>
    </Container>
  );
}