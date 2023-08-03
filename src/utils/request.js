import axios from "axios";


const request = axios.create({
//   baseURL: "/backend",
  timeout: 20000, // 请求超时
  headers: {
    // Accept: "application/vnd.adminapi.v1+json"
  }
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    // config.headers.Authorization = getToken() ? "Bearer " + getToken() : "";
    return config;
  },
  error => {
    return Promise.resolve(error);
  }
);

// 响应请求
request.interceptors.response.use(
  response => {
    let res = response.data;
    return res;
  },
  error => {
    return Promise.resolve(error);
  }
);

export default request;
