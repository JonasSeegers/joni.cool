import axios, { AxiosRequestConfig } from 'axios';

export class HttpService {
  public static async get(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const result = await axios.get(url, options);

    return result.data;
  }
}
