import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

export default (
  <Route path="/" component={App}>
  </Route>
);
// kinda like root to: app from rails
// or GET '/' => 'App'
