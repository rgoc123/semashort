import { RECEIVE_LINKS, RECEIVE_LINK } from '../actions/links_actions';

import merge from 'lodash/merge';

const linksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LINKS:
      return action.links;
    case RECEIVE_LINK:
      return merge({}, state, {[action.link.id]: action.link});
    default:
      return state;
  }
};

export default linksReducer;
