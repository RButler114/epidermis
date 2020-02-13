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
      <div className="navigation">
        <div>

          <div>
            <p>Want the most Infectious email newsletter on the internet?</p>
            <FormControl>
              <InputLabel htmlFor="my-input">Your Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
          </div>

          <div className="social">
            <p>Social</p>
            <div className="icon-list">
              <a className="social-icon" target="_blank" href=""><img className="social-icon" alt="Youtube" src={process.env.PUBLIC_URL + '/assets/yt_icon_rgb.png'}/></a>
              <a className="social-icon" target="_blank" href=""><img className="social-icon" alt="Twitch" src={process.env.PUBLIC_URL + '/assets/TwitchGlitchPurple.png'}/></a>
              <a className="social-icon" target="_blank" href=""><img className="social-icon" alt="Pintrest" src={process.env.PUBLIC_URL + '/assets/badgeRGB.png'}/></a>
              <a className="social-icon" target="_blank" href=""><img className="social-icon" alt="Instagram" src={process.env.PUBLIC_URL + '/assets/glyph-logo_May2016.png'}/></a>
              <a className="social-icon" target="_blank" href=""><img className="social-icon" alt="Facebook" src={process.env.PUBLIC_URL + '/assets/f_logo_RGB-Blue_72.png'}/></a>
              <a className="social-icon" target="_blank" href=""><img className="social-icon" alt="Twitter" src={process.env.PUBLIC_URL + '/assets/Twitter_Social_Icon_Circle_Color.png'}/></a>
            </div>
          </div>
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
      </div>

      <div className="copyright">
        <p>© Infectious Nerve 2020</p>
      </div>
    </footer>
  );
}

export default Footer;