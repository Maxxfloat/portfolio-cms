import axios from "axios";
import { error } from "console";
import qs from "qs";
import { config } from "./configs";

export const post = async (url: string, data: Object) => {
  try {
    const _url = config.serverUrl + url;
    const res = await axios.post(_url, data);
    const resData = qs.parse(res.data);
    return resData;
  } catch {}
};

export const get = async (url: string, options?: Object) => {
  try {
    const _url = config.serverUrl + url;
    const res = await axios.get(_url, options);
    const resData = qs.parse(res.data[0]);
    console.log("resData: ", resData);
    return resData;
  } catch {
    console.log("server connection problem");
  }
};
