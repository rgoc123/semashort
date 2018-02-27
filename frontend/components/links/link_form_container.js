import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createLink } from '../../actions/links_actions';

import LinkForm from './link_form';

const mSTP = (state) => {
  return {
    links: Object.values(state.entities.links)
  };
};

const mDTP = (dispatch) => {
  return {
    createLink: (link) => dispatch(createLink(link))
  };
};

export default connect(mSTP, mDTP)(LinkForm);
