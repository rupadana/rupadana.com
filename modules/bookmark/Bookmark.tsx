"use client"

import { BookmarkContent } from "@/common/types/bookmark";
import BookmarkCard from "./BookmarkCard";
import { BOOKMARK_CONTENTS } from "@/common/constant/bookmark";
import { useBookmarkCategoryStore } from "@/context/useBookmarkCategoryStore";
import BookmarkListHeader from "./BookmarkListHeader";
import { useMemo, useState } from "react";
import useSWR from 'swr';
import { fetcher } from "@/services/fetcher";
import EmptyState from "@/common/components/elements/EmptyState";
import LoadingCard from "@/common/components/elements/LoadingCard";
import useIsMobile from "@/hooks/useIsMobile";
import clsx from "clsx";


export default function Bookmark() {
    const { data, isLoading } = useSWR('/api/bookmarks', fetcher);

    const isMobile = useIsMobile();

    const bookmarks: BookmarkContent[] = useMemo(() => {

        if (data?.status) return data.data;

        return [];
    }, [data])

    const { categoryOption, setCategoryOption } = useBookmarkCategoryStore()

    const filteredBookmarks: BookmarkContent[] = useMemo(() => {
        if (categoryOption != 'all') {
            return bookmarks.filter((bookmark: BookmarkContent) => bookmark.category == categoryOption)
        }
        return bookmarks
    }, [categoryOption, bookmarks])

    return <>
        <BookmarkListHeader categoryOption={categoryOption} setCategoryOption={setCategoryOption} />

        {
            isLoading && <LoadingCard view="grid" />
        }

        <div
            className={clsx(
                'gap-5 sm:gap-4',
                isMobile ? 'flex flex-col' : 'grid grid-cols-1 sm:!gap-5'
            )}
        >
            {
                filteredBookmarks.length > 0 && filteredBookmarks.map(
                    (bookmark: BookmarkContent) => <BookmarkCard content={bookmark}></BookmarkCard>
                )
            }

        </div>

        {
            filteredBookmarks.length == 0 && !isLoading ? <EmptyState message="There's nothing bookmark"></EmptyState> : <div></div>
        }
    </>
}


function getBookmark(): BookmarkContent[] {
    return BOOKMARK_CONTENTS;
}