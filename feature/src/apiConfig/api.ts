import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const baseURL = "";

const MockMode = false;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000, // Adjust the timeout as needed
});

const axiosMockInstance = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 10000,
});

export const mock = new MockAdapter(axiosMockInstance);

if (MockMode) {
  // TODO:: add env variable
  mock.onGet("http://localhost:4000/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  });
} else {
  mock.restore();
}

// Add any default headers here (e.g., authentication tokens, content type)
axiosInstance.defaults.headers.common["Authorization"] =
  "Bearer YOUR_ACCESS_TOKEN";

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // custom logic for request logging or loading indicators.
    return config;
  },
  (error) => {
    // Handle request errors here (e.g., request config validation)
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // custom logic for response logging or global success handling
    return response;
  },
  (error) => {
    // Handle response errors here (e.g., token expiration, unauthorized access)
    if (error.response && error.response.status === 401) {
      // Redirect to the login page or handle token refresh
    } else {
      // Handle other error cases
    }
    return Promise.reject(error);
  }
);

const instance = MockMode ? axiosMockInstance : axiosInstance;

export const get = (url: string, params = {}) => instance.get(url, { params });

export const post = (url: string, data = {}) => instance.post(url, data);

export const put = (url: string, data = {}) => instance.put(url, data);

export const del = (url: string) => instance.delete(url);
