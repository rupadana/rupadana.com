import { ContentProps } from "@/common/types/learn";
import { fetcher } from "@/services/fetcher";
import axios from "axios";

export default async function getLearnSeries(): Promise<ContentProps[]> {
    const ENDPOINT = process.env.CMS_API_URL + '/learn-series/all' || '' as string;

    const response = await axios.get(ENDPOINT)
    if (response?.status !== 200) return {} as ContentProps[];
    return response.data.data as ContentProps[]
}