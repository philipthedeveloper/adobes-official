import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "../config";
import { ApiResponse } from "../interfaces";

// default
axios.defaults.baseURL = config.API_URL;

// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// intercepting to capture errors
axios.interceptors.response.use(
  function (response: AxiosResponse<ApiResponse>): ApiResponse | any {
    return response.data || ({} as any);
  },
  function (error: any) {
    let message =
      error?.response?.data?.message ||
      error?.message ||
      error ||
      "An error occurred!";
    return Promise.reject(message);
  }
);

class APIClient {
  /**
   * Fetches data from given url
   */
  get = (url: string, params?: {}) => {
    return axios.get(url, params);
  };

  /**
   * post given data to url
   */
  create = (url: string, data?: {}) => {
    return axios.post(url, data);
  };

  /**
   * Update but replace data
   */
  put = (url: string, data?: {}) => {
    return axios.put(url, data);
  };

  /**
   * Updates data
   */
  update = (url: string, data?: {}) => {
    return axios.patch(url, data);
  };

  /**
   * Delete
   */
  delete = (url: string, config?: {}) => {
    return axios.delete(url, { ...config });
  };

  /*
   file upload update method
  */
  updateWithFile = (url: string, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      formData.append(k, data[k]);
    }
  };

  /*
   file upload post method
   */
  createWithFile = (
    url: string,
    data: any,
    dataType?: "form-data" | "json"
  ) => {
    let formData: FormData = new FormData();
    if (dataType === "form-data") {
      formData = data;
    } else if (dataType === "json") {
      for (const k in data) {
        formData.append(k, data[k]);
      }
    }
    const config = {
      headers: {
        ...axios.defaults.headers,
        "Content-Type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config as AxiosRequestConfig<FormData>);
  };
}

export { APIClient };
