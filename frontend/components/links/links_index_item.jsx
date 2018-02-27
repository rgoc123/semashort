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
          <span>{this.link.id}</span>
          <span>{this.link.long_link}</span>
          <span>{this.link.short_link}</span>
          <span>{this.link.vists}</span>
        </div>
      );
    }
  }

}

export default LinksIndexItem;
