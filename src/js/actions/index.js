import axios from "axios";

const API_KEY = '8730e0e'
const ROOT_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const FETCH_DATA = "FETCH_DATA";
// export const FETCH_INFO = "FETCH_INFO";

export function fetchData(title) {
  const url = `${ROOT_URL}&t=${title}`;
//   const request = axios.get(url)
  return {
    type: FETCH_DATA,
    payload: axios.get(url)
  };
}

// export function getInfo(title) {
//   const urlinfo = `${ROOT_URL}&t=${title}`;
//   return {
//     type: FETCH_INFO,
//     payload: axios.get(urlinfo)
//   }
// }