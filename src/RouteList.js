import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './routes/About.js'
import Home from './routes/Home.js'
import Accessibility from './routes/AccessibilityStatement.js'
import Content from './routes/content/index.js'
import CookiePolicy from './routes/CookiePolicy.js'
import NotFound from './routes/404.js'
import Registration from './routes/Registration.js'



function RouteList() {
  return (
	  <Switch>
	    <Route path="/about" component={About} />
	    <Route path="/accessibility-statement" component={Accessibility} />
	    <Route path="/cookie-policy" component={CookiePolicy} />
	    <Route path="/c" component={Content} />

      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Registration} />
      <Route path="/signup" component={Registration} />


	    <Route exact path="/" component={Home} />
      <Route component={NotFound} />
	  </Switch>
  );
}

export default RouteList;