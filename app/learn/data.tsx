import { ContentProps } from "@/common/types/learn";
import { fetcher } from "@/services/fetcher";

export default async function getLearnSeries(): Promise<ContentProps[]> {
    const ENDPOINT = process.env.CMS_API_URL + '/learn-series/all' || '' as string;

    const response = await fetcher(ENDPOINT)
    if (response?.status !== 200) return {} as ContentProps[];
    return response.data.data as ContentProps[]
}