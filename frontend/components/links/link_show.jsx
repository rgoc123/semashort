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
    this.props.fetchLink(this.shortLink);
  }

  render() {
    debugger
    if(this.link) {
      window.location = this.link.long_link;
    } else {
      if (!this.props.link2) {
        debugger
        return (
          null
        );
      } else {
        debugger
        let longLink = this.props.link2[this.shortLink].long_link;
        window.location = longLink;
      }
    }
  }

}

export default LinkShow;
