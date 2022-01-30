import axios from "axios";
import { config } from "./configs";

export const post = async (url: string, data: Object) => {
  try {
    const _url = config.serverUrl + url;
    const res = await axios.post(_url, data).then((response) => response.data);
    return res;
  } catch {}
};

export const get = async (url: string, data: Object) => {
  try {
    const _url = config.serverUrl + url;
    const res = await axios.post(_url, data).then((response) => response.data);
    return res;
  } catch {}
};
