import axios from 'axios';
import * as https from "https";
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

export const fetcher = (url: string) => axios.get(url, {
    httpsAgent
});
