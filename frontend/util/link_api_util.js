export const fetchLinks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/links'
  });
};

// export const fetchLink = shortLink => {
//   return $.parseJSON($.ajax({
//     method: 'GET',
//     url: `/api/links/${shortLink}`,
//     async: false
//   }).responseText);
// };

export const fetchLink = short_link => {

  return $.ajax({
    method: 'GET',
    url: `/api/links/${short_link}`,
    async: false
  });
};

export const createLink = link => {
  return $.ajax({
    method: 'POST',
    url: '/api/links',
    data: { link }
  });
};
