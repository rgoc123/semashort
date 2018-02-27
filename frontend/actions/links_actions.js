import * as APIUtilLinks from '../util/link_api_util';

export const RECEIVE_LINKS = 'RECEIVE_LINKS';

//Actions
export const receiveLinks = links => {
  return {
    type: RECEIVE_LINKS,
    links
  };
};


//Thunks
export const fetchLinks = () => dispatch => {
  return (
    APIUtilLinks.fetchLinks().then(links => (
      dispatch(receiveLinks(links))
    ))
  );
};
