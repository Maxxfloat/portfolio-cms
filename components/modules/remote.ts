import { instance } from "./configs";

export const post = async (url: string, data: Object) => {
  try {
    await instance.post(url, data);
  } catch {
    throw "there is something wrong";
  }
};

export const get = async (url: string, options?: Object) => {
  try {
    const result: any = await instance.get(url, options);
    // console.log("res: ", result);
    // const data = JSON.parse(result);
    // console.log("data: ", data);

    return result.data.results[0];
  } catch {
    console.log("server connection problem");
  }
};
