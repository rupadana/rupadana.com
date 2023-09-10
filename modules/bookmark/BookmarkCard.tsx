import Card from "@/common/components/elements/Card";
import clsxm from "@/common/libs/clsxm";
import { BookmarkContent } from "@/common/types/bookmark";
import Image from "next/image";
import Link from "next/link";

import { PLACEHOLDER_URL } from '@/common/constant';
import CategoryBadge from "./CategoryBadge";
import useIsMobile from "@/hooks/useIsMobile";

interface Props {
    content: BookmarkContent
    isCarousel?: boolean,
}

export default function BookmarkCard(
    {
        content,
        isCarousel = false
    }: Props
) {

    const isMobile = useIsMobile();

    const contentContainerClasses = clsxm(
        'flex flex-col self-center w-full sm:w-4/5 flex-grow space-y-3 px-5 sm:p-0 mb-5 sm:mb-0'
    );

    return <>
        <a href={content.url} target="_blank" rel="noopener noreferrer">
            <Card
                className={clsxm(
                    'flex sm:items-center sm:flex-row gap-6 cursor-pointer border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%] w-full !flex-row p-5 px-6',
                    isCarousel && 'min-w-[350px]',
                )}
            >
                <div className="w-fit">
                    <Image
                        src={content.image || PLACEHOLDER_URL}
                        width={50}
                        height={50}
                        alt={content.title}
                        className='sm:rounded-xl object-cover !rounded-t-xl !rounded-b-none'
                    />
                </div>
                <article className={contentContainerClasses}>
                    <h2 className="md:text-[17px] font-medium text-neutral-600 dark:text-neutral-200 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
                        {content.title}
                    </h2>
                    <div className="flex gap-4 text-neutral-600 dark:text-neutral-400">
                        <p className="sm:block leading-relaxed text-sm text-neutral-600 dark:text-neutral-400">
                            {content.description}
                        </p>
                    </div>
                    {
                        isMobile && <div
                            className="w-fit"
                        >
                            <CategoryBadge name={content.category} />
                        </div>
                    }
                </article>

                {
                    !isMobile && <div
                        className="w-fit"
                    >
                        <CategoryBadge name={content.category} />
                    </div>
                }
            </Card>
        </a>
    </>
}