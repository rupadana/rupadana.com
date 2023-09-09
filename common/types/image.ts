export interface ImageType {
    type: string;
    title: string;
    alt: string | null;
    description: string | null;
    url: string;
    thumbnail_url: string;
    medium_url: string;
    large_url: string;
    size: number;
}