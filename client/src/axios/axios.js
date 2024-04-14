import axios from "axios";

const instance = axios.create({
  baseURL: "https://graph-visualiser.vercel.app/",
});

export default instance;
