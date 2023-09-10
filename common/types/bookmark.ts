import { ImageType } from "./image";

export interface BookmarkContent {
    title: string;
    description: string;
    url: string;
    image: string;
    category: 'inspirasi' | 'artikel' | 'tools' | 'video' | 'portofolio',
}