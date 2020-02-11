import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';


import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';




function Footer() {
  return (
    <footer>
      <div>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>

      <div>
        <Link to='/about'>About</Link>
      </div>

      <div>
        <p class="">Legal</p>
        <Link to="/terms-conditions">Terms and Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/accessibility-statement">Accessibility Statement</Link>
        <Link to="/cookie-policy">Cookie Policy</Link>
      </div>

      <div>
        <p>© Infectious Nerve 2020</p>
      </div>
    </footer>
  );
}

export default Footer;
