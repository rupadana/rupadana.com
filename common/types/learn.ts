import { ImageType } from "./image";

export interface ContentLanguage {
  id: string;
  title: string;
}



export interface ContentProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: any;
  is_new: boolean;
  level: 'Beginner' | 'Medium' | 'Advanced';
  language: string;
  is_show: boolean;
  created_at: string | null;
  updated_at: string | null;
  collection_id: number | null;
}

export interface SubContentProps {
  parent?: string;
  contentSlug?: string;
  subContentSlug: string;
  title: string;
  language?: string;
  difficulty?: string;
}

export interface SubContentMetaProps {
  id: number;
  title: string;
  slug: string;
  category: string;
  language?: string;
  difficulty?: string;
  source?: string;
  cover_image?: string;
  source_url?: string;
  created_at: string;
  edited_at: string;
  social_image: string;
  tag_list: string[];
}

export interface MdxFileContentProps {
  slug: string;
  frontMatter: SubContentMetaProps;
  content: string;
}


export interface ContentDetailProps {
  content: ContentProps | any;
  subContents: SubContentMetaProps[];
}