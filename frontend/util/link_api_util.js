export const fetchLinks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/links'
  });
};
