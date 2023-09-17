const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const endpoints = {
  shows: `${BASE_API_URL}shows`,
  show: `${BASE_API_URL}lookup/shows`,
  search: `${BASE_API_URL}search/shows`,
};
