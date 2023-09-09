import { MetadataRoute } from 'next'
import { getLearnSeries } from './learn/page'
import domain from '@/common/libs/domain';




export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const learnSeries = await getLearnSeries();

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

        ...learnSeries.map(item => {
            return {
                url: domain(`/${item.slug}`),
                lastModified: item.updated_at as string
            }
        })
    ]
}