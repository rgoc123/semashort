export const fetchLinks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/links'
  });
};

export const fetchLink = shortLink => {
  return $.ajax({
    method: 'GET',
    url: `/api/links/${shortLink}`
  });
};

export const createLink = link => {
  return $.ajax({
    method: 'POST',
    url: '/api/links',
    data: { link }
  });
};
