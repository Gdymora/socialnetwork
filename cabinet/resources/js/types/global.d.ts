import { AxiosInstance } from 'axios';
import { Config as ZiggyConfig } from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
        fs: {
            readFile: (path: string, options?: { encoding?: string }) => Promise<any>;
        };
    }

    var route: ((name?: string, params?: any, absolute?: boolean, config?: ZiggyConfig) => string) & { current: () => string };
    var Ziggy: ZiggyConfig;
}
