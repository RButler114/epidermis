import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './routes/About.js'
import Home from './routes/Home.js'
import Accessibility from './routes/AccessibilityStatement.js'
import Content from './routes/content/index.js'
import CookiePolicy from './routes/CookiePolicy.js'

function RouteList() {
  return (
	  <Switch>
	    <Route path="/about" component={About} />
	    <Route path="/accessibility-statement" component={Accessibility} />
	    <Route path="/cookie-policy" component={CookiePolicy} />
	    <Route path="/c" component={Content} />
	    <Route exact path="/" component={Home} />
	  </Switch>
  );
}

export default RouteList;