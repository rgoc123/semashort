import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LinkShow from './link_show';

const mSTP = (state, ownProps) => {
  return {
    link: state.entities.links[ownProps.match.params.shortLink]
  };
};

export default withRouter(connect(mSTP)(LinkShow));
