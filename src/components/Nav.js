import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	sidebarStatus: 'open' 
    };

    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
  }

  /* actions */
		handleOpenMenu(){
		  this.setState({ sidebarStatus: 'open' });
		}

		handleCloseMenu(){
		 	this.setState({ sidebarStatus: '' });
		}

    handleSearchOpen(){

    }

    handleAccountMenuOpen(){

    }
	/**/

  render() {
	  return (
	  	<React.Fragment>
		    <nav>
			  	<div className="nav_spacer">
			    	<div className="nav_leadbar">	   
              <div className="g_fl"> 		
                <button onClick={this.handleOpenMenu}>Menu</button>
                <Link title="Home" to='/'><img alt="Infectious Nerve" src={process.env.PUBLIC_URL + '/assets/close_icon.svg'} /></Link>
              </div>
              <div className="g_fr">
                <button>Search</button>
                <button>Account</button>               
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
		    		<button>Login</button>
		      	<button>Sign Up</button>
		    	</div>
		    </nav>
	    </React.Fragment>
	  );
  }
}


export default Nav;
