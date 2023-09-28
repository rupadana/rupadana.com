'use client'

import useSWR from 'swr';
import useIsMobile from '@/hooks/useIsMobile';
import { useParams } from 'next/navigation';
import ContentLists from '../components/ContentLists';
import { fetcher } from '@/services/fetcher';
import { ContentDetailProps, ContentProps, SubContentMetaProps } from '@/common/types/learn';
import { useMemo } from 'react';
import { LEARN_CONTENTS } from '@/common/constant/learn';


export default function LearnSidebar() {
    const isMobile = useIsMobile();
    const params = useParams();

    const content = LEARN_CONTENTS.find((c: ContentProps) => c.slug == params.content);

    const { data, isLoading } = useSWR(`/api/learn/${params.content}`, fetcher);

    const contents: SubContentMetaProps[] = useMemo(() => {
        if (data?.status) {
            return data.data
        }
        return [];
    }, [data])


    return (
        <>
            <div className="p-8 lg:p-0 sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">

                {!isLoading && contents?.length > 0 ? (
                    <>
                        <h2 className="text-2xl font-medium font-sora border-b border-dashed border-neutral-600 py-2">Learn Series</h2>

                        <div className='py-2'></div>

                        <ContentLists title={content?.title} content={content} sortedSubContents={contents} />
                    </>
                ) : <div></div>}
            </div>
        </>
    );
}
