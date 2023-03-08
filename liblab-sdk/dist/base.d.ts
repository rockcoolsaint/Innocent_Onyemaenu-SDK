type Config = {
    baseUrl?: string;
    authorization: string;
};
export declare abstract class Base {
    private authorization;
    private baseUrl;
    constructor(config: Config);
    protected request<T>(endpoint: string, options?: RequestInit): Promise<T>;
}
export {};
