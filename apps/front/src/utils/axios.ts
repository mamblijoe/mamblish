import axios from "axios";


export const restApi = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
});
