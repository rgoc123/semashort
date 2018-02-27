export const fetchLinks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/links'
  });
};

export const createLink = link => {
  return $.ajax({
    method: 'POST',
    url: '/api/links',
    data: { link }
  });
};
