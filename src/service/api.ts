import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

interface PayloadType {
  fileType?: string;
  params?: any;
}

interface ApiType {
  url?: string;
  method?: string;
  body?: object | null;
  headers?: AxiosRequestHeaders | object;
  payload?: object | PayloadType;
}

interface HeadersIntf {
  Authorization?: string;
  "Content-Type"?: string;
}

const POST = "post";
const GET = "get";
const PUT = "put";
const DELETE = "delete";
const PATCH = "patch";

export const api = ({ url, method, body, headers }: ApiType) => {
  let config: AxiosRequestConfig = {
    url: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
    method: method,
    data: body,
    headers: headers,
  };

  return axios(config);
};

const apiRequest = async ({ method, url, payload = {} }: ApiType) => {
  let body: PayloadType | null = null;
  let headers: HeadersIntf = {
    "Content-Type": "application/json",
  };

  if (payload) {
    body = payload;
  }

  try {
    const response = await api({ url, method, body, headers });
    return response?.data;
  } catch (error: any) {
    throw error?.data || error?.response?.data;
  }
};

// function to execute the http get request
const get = ({ url, payload }: ApiType) =>
  apiRequest({
    url: url,
    payload,
    method: GET,
  });

// function to execute the http delete request
const deleteRequest = ({ url, payload }: ApiType) =>
  apiRequest({ method: DELETE, url: url, payload: payload });

// function to execute the http post request
const post = ({ url, payload }: ApiType) =>
  apiRequest({
    method: POST,
    url: url,
    payload: payload,
  });

// function to execute the http put request
const put = ({ url, payload }: ApiType) =>
  apiRequest({
    method: PUT,
    url: url,
    payload: payload,
  });

// function to execute the http path request
const patch = ({ url, payload }: ApiType) =>
  apiRequest({ method: PATCH, url: url, payload: payload });

export default {
  get,
  deleteRequest,
  post,
  put,
  patch,
};
