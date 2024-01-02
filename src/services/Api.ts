import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class Api {
  static async get<T>(url: string, reqCfg: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get<T>(url, reqCfg);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
