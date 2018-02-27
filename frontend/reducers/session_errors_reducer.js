import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default sessionReducer;
