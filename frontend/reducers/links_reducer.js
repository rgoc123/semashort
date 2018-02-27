import { RECEIVE_LINKS } from '../actions/links_actions';

import merge from 'lodash/merge';

const linksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LINKS:
      return action.links;
    default:
      return state;
  }
};

export default linksReducer;
