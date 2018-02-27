import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchLinks } from '../../actions/links_actions';

import LinksIndex from './links_index';

const mSTP = (state) => {
  return {
    links: Object.values(state.entities.links)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchLinks: () => dispatch(fetchLinks())
  };
};

export default connect(mSTP, mDTP)(LinksIndex);
