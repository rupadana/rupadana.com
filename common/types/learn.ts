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
  image: ImageType;
  is_new: boolean;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  is_show: boolean;
  created_at: string | null;
  updated_at: string | null;
}

export interface SubContentProps {
  parent: string;
  contentSlug: string;
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
  cover_url?: string;
  source_url?: string;
  created_at: string;
  updated_at: string;
}

export interface MdxFileContentProps {
  slug: string;
  frontMatter: SubContentMetaProps;
  content: string;
}


export interface ContentDetailProps {
  content: ContentProps;
  subContents: SubContentMetaProps[];
}