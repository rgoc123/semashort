import * as APIUtilLinks from '../util/link_api_util';

export const RECEIVE_LINKS = 'RECEIVE_LINKS';
export const RECEIVE_LINK = 'RECEIVE_LINK';

//Actions
export const receiveLinks = links => {
  return {
    type: RECEIVE_LINKS,
    links
  };
};

export const receiveLink = link => {
  return {
    type: RECEIVE_LINK,
    link
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

export const fetchLink = shortLink => dispatch => {
  return (
    APIUtilLinks.fetchLink(shortLink).then(link => (
      dispatch(receiveLink(link))
    ))
  );
};

export const createLink = link => dispatch => {
  return (
    APIUtilLinks.createLink(link).then(link => (
      dispatch(receiveLink(link))
    ))
  );
};
