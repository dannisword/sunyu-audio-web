import axios from "axios";

//import { getUserInfo, getToken } from "./localStorage";

function getToken() {
  var data = localStorage.getItem("userInfo");
  var user = JSON.parse(data);
  if (user) {
    return user.token;
  }
  return undefined;
}
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
});
function parseBody(response) {
  if (response.status === 200) {
    return response.data;
  } else {
    return this.parseError(response.data.messages);
  }
}
function parseError(response) {
  if (response.status == 404) {
    console.log("服務不存在");
    return;
  }
  if (response.status == 500) {
    /*
    Message({
      message: "服務發生問題",
      type: "warning",
      duration: 5000,
    });
*/
    console.log("服務發生問題");
    return;
    //return Promise.reject({ message: ["程式發生問題"] });
  }
  // error
  if (response.data) {
    /*
    Message({
      message: response.data.message,
      type: "error",
      duration: 5 * 1000,
    });*/
  } else {
    return Promise.reject({ messages: ["發生了錯誤"] });
  }
}

// request interceptor
service.interceptors.request.use(
  (config) => {
    // 驗證
    const token = getToken();
    if (token !== undefined) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    return parseBody(response);
  },
  (error) => {
    //parseError(error.response);
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
