import axios from "axios";

export const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": process.env.PARSE_APP_ID,
    "X-Parse-REST-API-Key": process.env.PARSE_REST_KEY,
    "Content-Type": "application/json",
    "content-type": "application/json",
  },
});
