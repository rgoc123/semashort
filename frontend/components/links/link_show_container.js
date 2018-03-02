import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchLink } from '../../actions/links_actions';

import LinkShow from './link_show';

const mSTP = (state, ownProps) => {

  return {
    link: state.entities.links[ownProps.match.params.shortLink]
  };
};

const mDTP = dispatch => {
  return {
    fetchLink: shortLink => dispatch(fetchLink(shortLink))
  };
};

export default withRouter(connect(mSTP, mDTP)(LinkShow));
