import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LinksIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.link = this.props.link;
  }

  render() {
    if (!this.link) {
      return null;
    } else {
      return (
        <div className="links-index-item">
          <span>Short Link: <a href={this.link.short_link} target="_blank">{this.link.short_link}</a></span>
          <span>Destination: {this.link.long_link}</span>
        </div>
      );
    }
  }

}

export default LinksIndexItem;
