import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type BookmarkCategoryState = {
    categoryOption: string;
    setCategoryOption: (option: string) => void;
};

export const useBookmarkCategoryStore = create<BookmarkCategoryState>()(
    devtools(
        persist(
            set => ({
                categoryOption: 'all',
                setCategoryOption: option => set(() => ({ categoryOption: option }))
            }),
            {
                name: 'bookmark-category'
            }
        )
    )
);
