import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';
import Modal from 'react-modal';

import { 
  Container, 
  Row,
  Col,
} from 'react-bootstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      feedbackModal: false, 
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  /* actions */
    handleOpenModal(){
      this.setState({ feedbackModal: true });
    }
    handleCloseModal(){
      this.setState({ feedbackModal: false });
    }
  /**/

  render() {

    return (
      <footer>
        <Modal isOpen={this.state.feedbackModal} onRequestClose={this.handleCloseModal}>
          <h2>Modal title</h2> 
          <p>Modal text</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>


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
                  <a className="social-icon" target="_blank" rel="noopener noreferrer" href=""><img className="social-icon" alt="Youtube" src={process.env.PUBLIC_URL + '/assets/yt_icon_rgb.png'}/></a>
                  <a className="social-icon" target="_blank" rel="noopener noreferrer" href=""><img className="social-icon" alt="Twitch" src={process.env.PUBLIC_URL + '/assets/TwitchGlitchPurple.png'}/></a>
                  <a className="social-icon" target="_blank" rel="noopener noreferrer" href=""><img className="social-icon" alt="Pintrest" src={process.env.PUBLIC_URL + '/assets/badgeRGB.png'}/></a>
                  <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/infectiousnerve/?hl=en"><img className="social-icon" alt="Instagram" src={process.env.PUBLIC_URL + '/assets/glyph-logo_May2016.png'}/></a>
                  <a className="social-icon" target="_blank" rel="noopener noreferrer" href=""><img className="social-icon" alt="Facebook" src={process.env.PUBLIC_URL + '/assets/f_logo_RGB-Blue_72.png'}/></a>
                  <a className="social-icon" target="_blank" rel="noopener noreferrer" href=""><img className="social-icon" alt="Twitter" src={process.env.PUBLIC_URL + '/assets/Twitter_Social_Icon_Circle_Color.png'}/></a>
                </div>
              </div>

              <p>Have a suggestion to help make the site better? <a href="#" onClick={this.handleOpenModal}>Send it over</a>, we love feedback!</p>
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
}

export default Footer;