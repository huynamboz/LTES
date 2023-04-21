const axios = require("axios").default;

const instance = axios.create({
  baseURL: process.env.BASE_URL_API,
});

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.interceptors.request.use(
  (request) => {
    console.log("making request", request);
    if(request.url.includes('null') 
		|| request.url.includes('undefined') 
		|| request.url.includes('//')) {
      return Promise.reject("NOT REQUEST");
    }
    const token = localStorage.getItem("auth._token.local") ?? null;
    if(token){
      request.headers["Authorization"] = localStorage.getItem("auth._token.local");
    }
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log("error", error);
    if (error.response?.status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default instance;
