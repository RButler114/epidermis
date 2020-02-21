import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.scss';
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
	/**/

  render() {
	  return (
	  	<React.Fragment>
		    <nav>
			  	<div className="nav_spacer">
			    	<div className="nav_leadbar">	    		
			    		<button onClick={this.handleOpenMenu}>Open</button>
			    	</div>
		    	</div>
		    	<div id="nav__sidebar" className={this.state.sidebarStatus}>
		    		<button onClick={this.handleCloseMenu}>X</button>
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
