export const API_BASE_URL =
  'https://jsonplaceholder.typicode.com';

const API_QUERY = {
  first: `?_limit=100`,
  second: `&_limit=100`,
};

export const API_ENDPOINTS = {
  albums: {
    index: '/albums' + API_QUERY.first,
    id: (id: number) =>
      `/photos/?albumId=${id}` + API_QUERY.second,
  },
  photos: {
    index: '/photos' + API_QUERY.first,
    id: (id: number) =>
      `/photos/?id=${id}` + API_QUERY.second,
  },
};

// For using with min-width media query
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1366px',
  desktop: '1680px',
};
