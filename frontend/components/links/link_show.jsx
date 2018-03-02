import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

class LinkShow extends React.Component {

  constructor(props) {
    super(props);
    this.shortLink = this.props.match.params.shortLink;
    // this.link = this.props.link;
    // this.link2 = this.props.link2;
    this.props.fetchLink(this.shortLink);
    // console.log(this.a);
    debugger
  }

  componentWillMount() {
    this.long_link = window.getState().entities.links.link.long_link;
    debugger
  }

  // makeTheLink() {
  //   debugger
  //   if (this.props.link2 === undefined) {
  //     let newShortLink = "https://semashort.herokuapp.com/#/links/" + this.shortLink;
  //     let longLink = this.props.link2[newShortLink].long_link;
  //     debugger
  //     window.location = longLink;
  //   } else {
  //     window.location = "https://semashort.herokuapp.com/#/links/" + this.shortLink;
  //   }
  //
  // }

  render() {
    // if(this.link) {
    //   window.location = this.long_link;
    // } else {
    //   if (this.props.link2 === {}) {
    //     return (
    //       null
    //     );
    //   } else {
    //     debugger
    //     this.props.fetchLink(this.shortLink).then(this.makeTheLink());
    //   }
    // }
    window.location = this.long_link;
  }

}

export default LinkShow;
