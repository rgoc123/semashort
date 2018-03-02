import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import LinksIndexItem from './links_index_item';

class LinksIndex extends React.Component {

  componentDidMount() {
    this.props.fetchLinks();
  }

  render() {
    if (!this.props.links) {
      return null;
    } else {
      return (
        <div className="links-index-container">
          <h1>All Links</h1>
          <div>
            {this.props.links.map(link => <LinksIndexItem key={link.id} link={link} />)}
          </div>
        </div>
      );
    }
  }

}

export default LinksIndex;
