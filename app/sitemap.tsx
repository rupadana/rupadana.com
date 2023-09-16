import { MetadataRoute } from 'next'

import domain from '@/common/libs/domain';
import getLearnSeries from './learn/data';
import { ContentProps } from '@/common/types/learn';
import axios from 'axios';




export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const learnSeries = await getLearnSeries();

    let domains = [
        ...learnSeries.map(item => {
            return {
                url: domain(`/learn/${item.slug}`),
                lastModified: item.updated_at as string
            }
        })
    ]

    await Promise.all([
        ...learnSeries.map(async (series: ContentProps) => {
            return new Promise(async resolve => {
                const endpoint = process.env.CMS_API_URL + '/learn-series/' + series.slug + '/contents';
                const contents = await axios.get(endpoint) as any;

                await Promise.all([
                    contents.data.data.subContents.map((item: any) => {
                        return new Promise(resolve => {
                            domains.push({
                                url: domain(`/learn/${series.slug}/${item.slug}`),
                                lastModified: item.updated_at as string
                            })
                            resolve(domains)
                        })
                    })
                ])

                resolve(domains)
            })
        })
    ])

    return [
        {
            url: domain('/'),
            lastModified: new Date(),
        },
        {
            url: domain('/me'),
            lastModified: new Date(),
        },
        {
            url: domain('/blog'),
            lastModified: new Date(),
        },
        {
            url: domain('/projects'),
            lastModified: new Date(),
        },
        {
            url: domain('/about'),
            lastModified: new Date(),
        },
        {
            url: domain('/roadmap'),
            lastModified: new Date(),
        },
        ...domains

    ]
}