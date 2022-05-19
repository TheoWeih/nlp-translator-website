import axios from "axios";

const appURL = "http://127.0.0.1:5000/";

const api = axios.create({ baseURL: appURL });

export async function getPing() {
  try {
    const response = await api.get("ping");
    if (response.status > 400) {
      throw response.data;
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
