import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';

import { 
  Container, 
  Row,
  Col,
} from 'react-bootstrap';



function Footer() {
  

  return (
    <footer>
      <Container>
        <Row className="_navigation">
          <div className="__direct">
            <div>
              <Link to='/about'>About</Link>
            </div>


          </div>


          <div className="__connect">
            <div>
              <p>Want the most Infectious email newsletter on the internet?</p>

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

            <p>Have a suggestion to help make the site better? <a href="#">Send it over</a>, we love feedback!</p>
          </div>    
        </Row>
      </Container>

      <Container className="_copyright">
        <Row>
          <Col sm="9" className="__legal">
            <Link to="/terms-conditions">Terms and Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/accessibility-statement">Accessibility Statement</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/cookie-policy">Sitemap</Link>
          </Col>
          <Col sm="3">
            <p>© Infectious Nerve 2020</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;