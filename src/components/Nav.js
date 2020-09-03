import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../styles/navigation.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	sidebarStatus: '', 
      accountModalStatus: false
    };

    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.accountModalClose = this.accountModalClose.bind(this);
    this.accountModalOpen = this.accountModalOpen.bind(this);
  }

  /* actions */
		handleOpenMenu(){
		  this.setState({ sidebarStatus: 'open' });
		}

		handleCloseMenu(){
		 	this.setState({ sidebarStatus: '' });
		}

    accountModalOpen(){
      this.setState({ accountModalStatus: true });
      Modal.setAppElement('body');
    }

    accountModalClose(){
      this.setState({ accountModalStatus: false });
    }
	/**/


  render() {
	  return (
	  	<React.Fragment>
        <Modal className="accountModal" isOpen={this.state.accountModalStatus} onRequestClose={this.accountModalClose}>
          <div className="account-benifits">
            <p>Log in to Infectious Nerve to:</p>
            <p>Comment on posts</p>
            <p></p>
            <p>By connecting, you’re agreeing to our Terms of Use and Privacy Policy .</p>
          </div>
          <div className="account-entry">
            <p>Login / SignUp</p>
            <div>



            </div>
            <p>Or</p>
            <button className="account-entry-connectButton facebook">Connect with Facebook</button>
            <button className="account-entry-connectButton twitter">Connect with Twitter</button>
            <button className="account-entry-connectButton google">Connect with Google</button>
            
            <button onClick={this.accountModalClose}>Close Modal</button>
          </div>
        </Modal>

		    <nav>
			  	<div className="nav_spacer">
			    	<div className="nav_leadbar">	   

              <div className="nav_leadbar_controls g_fl"> 		
                <button onClick={this.handleOpenMenu}>Menu</button>
              </div>

              <div className="nav_leadbard_links g_fr">
                <button>Search</button>
                <button onClick={this.accountModalOpen}>Account</button>               
              </div>

			    	</div>
		    	</div>
		    	<div id="nav__sidebar" className={this.state.sidebarStatus}>
            <div className="__closeBarWrapper">
		    		  <button className="__closeBar"title="Close Menu" onClick={this.handleCloseMenu}><img alt="Close Menu" src={process.env.PUBLIC_URL + '/assets/close_icon.svg'} /></button>
		      	</div>
            <ul>
			        <li><Link to='/'>Home</Link></li>
			        <li><Link to='/about'>About</Link></li>
			        <li><Link to='/c'>Content</Link></li>
		      	</ul>
		    		<button onClick={this.accountModalOpen}>Login</button>
		      	<button onClick={this.accountModalOpen}>Sign Up</button>
		    	</div>
		    </nav>
	    </React.Fragment>
	  );
  }
}


export default Nav;
