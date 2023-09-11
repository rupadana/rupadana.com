'use client'

import Breakline from '@/common/components/elements/Breakline';
import Copyright from '@/common/components/elements/Copyright';

import useSWR from 'swr';
import useIsMobile from '@/hooks/useIsMobile';
import { useParams } from 'next/navigation';
import ContentLists from '../components/ContentLists';
import { fetcher } from '@/services/fetcher';
import { ContentDetailProps } from '@/common/types/learn';
import { useMemo } from 'react';


export default function LearnSidebar() {
    const isMobile = useIsMobile();
    const params = useParams();

    const { data, isLoading } = useSWR(`/api/learn/${params.content}`, fetcher);

    const { content, subContents }: ContentDetailProps = useMemo(() => {
        if (data?.status) {
            return {
                content: data.data.content,
                subContents: data.data.subContents
            }
        }
        return {} as ContentDetailProps;
    }, [data])


    return (
        <>
            <div className="p-8 lg:p-0 sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">

                {!isMobile && !isLoading && subContents?.length > 0 ? (
                    <>
                        <h2 className="text-2xl font-medium font-sora border-b border-dashed border-neutral-600 py-2">Learn Series</h2>

                        <div className='py-2'></div>

                        <ContentLists title={content?.title} content={content} sortedSubContents={subContents} />
                    </>
                ) : <div></div>}
            </div>
        </>
    );
}
