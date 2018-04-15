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
import LinkFormContainer from './links/link_form_container';
import LinkShowContainer from './links/link_show_container';

const App = () => (
  <div>
    <h1 id="header">SemaShort</h1>
    <div className="container">
      <Route exact path="/" component={LinkFormContainer} />
      <Route exact path="/" component={LinksIndexContainer} />
      <Route exact path="/:shortLink" component={LinkShowContainer} />
    </div>
  </div>
);

export default App;
