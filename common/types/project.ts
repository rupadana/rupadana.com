export interface ContentLanguage {
  id: string;
  title: string;
}

export interface ContentProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo: string;
  link_github: string;
  stacks: string;
  is_show: boolean;
  updated_at: string;
  content:string;
  is_featured:boolean;
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
