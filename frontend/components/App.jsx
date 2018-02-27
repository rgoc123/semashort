import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

//Import components
import LinksIndexContainer from './links/links_index_container';

const App = () => (
  <div>

    <h1>SemaShort</h1>

    <Route exact path="/" component={LinksIndexContainer} />

  </div>
);

export default App;
