import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

class LinkShow extends React.Component {

  constructor(props) {
    super(props);
    this.shortLink = this.props.match.params.shortLink;
    this.props.fetchLink(this.shortLink);
    debugger
  }

  componentWillMount() {
    this.long_link = window.getState().entities.links.link.long_link;
    debugger
  }

  render() {
    debugger
    window.location = this.long_link;
  }

}

export default LinkShow;
