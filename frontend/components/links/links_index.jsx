import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import LinksIndexItem from './links_index_item';

class LinksIndex extends React.Component {

  componentDidMount() {
    this.props.fetchLinks();
  }

  render() {
    return this.props.links.map(
      link => <LinksIndexItem key={link.id} link={link} />
    );
  }

}

export default LinksIndex;
