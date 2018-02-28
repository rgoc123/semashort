import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

class LinkShow extends React.Component {

  constructor(props) {
    debugger
    super(props);
    this.link = this.props.link;
  }

  render() {
    window.location = this.link.long_link;
  }

}

export default LinkShow;
