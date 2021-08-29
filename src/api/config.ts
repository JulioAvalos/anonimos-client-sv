import axios, { AxiosInstance, ResponseType } from "axios";

const API_URL_BASE: string = `${process.env.REACT_APP_URL}` || "http://localhost:8081";
const TEST_URL_BASE: string = `${process.env.REACT_APP_TEST_API_URL}` || "http://localhost:5000";

export enum Methods {
  HEAD = "HEAD",
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type RequestOptions = {
  data?: Record<string, unknown>;
  params?: Record<string, unknown>;
  method: Methods;
  headers?: Record<string, unknown>;
  token?: string | null;
  responseType?: ResponseType;
};

export const URLEncoded: Record<string, unknown> = {
  "Content-Type": "application/x-www-form-urlencoded",
};

export const Multipart: Record<string, unknown> = {
  "Content-Type": "multipart/form-data",
};

export const JSONBody: Record<string, unknown> = {
  "Content-Type": "application/json",
};

export const RequestType: Record<string, unknown> = {
  URLEncoded,
  Multipart,
  JSONBody,
};

export const http: AxiosInstance = axios.create({
  baseURL: API_URL_BASE,
});

http.interceptors.request.use(
  (config) => {
    const token: string | null = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    if (error.status === 401) {
      localStorage.clear();
      global.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('error', error);
    if (error.response.status === 401) {
      localStorage.clear();
      global.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const testHttp: AxiosInstance = axios.create({
  baseURL: TEST_URL_BASE,
});
