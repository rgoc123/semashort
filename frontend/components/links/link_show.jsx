import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

class LinkShow extends React.Component {

  constructor(props) {
    super(props);
    this.shortLink = this.props.match.params.shortLink;
    this.link = this.props.link;
    this.link2 = this.props.link2;
  }

  componentDidMount() {
    this.props.fetchLink(this.shortLink);
  }

  render() {
    if(this.link) {
      window.location = this.link.long_link;
    } else {
      if (!this.props.link2.link) {
        return (
          null
        );
      } else {
        window.location = this.props.link2.link.long_link;
      }
    }

    // window.location = this.props.link2.link.long_link;
    // window.location = this.link.long_link;
  }

}

export default LinkShow;
