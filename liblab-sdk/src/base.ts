import fetch from "isomorphic-unfetch";

type Config = {
  baseUrl?: string;
  authorization: string;
};

export abstract class Base {
  private authorization: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.authorization = config.authorization;
    this.baseUrl = "https://the-one-api.dev/v2/";
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": this.authorization,
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}