import axios from "axios";
import { getCookie } from "./Cookie";

export default axios.create({
  withCredentials: true,
  headers: {
    accessToken: getCookie("accessToken"),
  },
});
