import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

class LinkShow extends React.Component {

  constructor(props) {
    super(props);
    this.shortLink = "https://semashort.herokuapp.com/#/links/" + this.props.match.params.shortLink;
    this.link = this.props.link;
    this.link2 = this.props.link2;
  }

  componentDidMount() {
    this.props.fetchLink(this.props.match.params.shortLink);
  }

  render() {
    if(this.link) {
      window.location = this.link.long_link;
    } else {
      if (!this.props.link2) {
        return (
          null
        );
      } else {
        let longLink = "https://semashort.herokuapp.com/#/links/" + this.props.match.params.shortLink;
        window.location = longLink;
      }
    }
  }

}

export default LinkShow;
