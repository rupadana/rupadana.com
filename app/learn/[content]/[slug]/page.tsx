import { Metadata, ResolvingMetadata } from 'next';

import React from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Breakline from '@/common/components/elements/Breakline';
import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';
import loadMdxFiles from '@/common/libs/mdx';

import ContentDetail from '@/modules/learn/components/ContentDetail';
import ContentDetailHeader from '@/modules/learn/components/ContentDetailHeader';
import { fetcher } from '@/services/fetcher';
import axios from 'axios';
import { DEV_TO_URL } from '@/common/constant';
import { ContentProps } from '@/common/types/learn';
import { LEARN_CONTENTS } from '@/common/constant/learn';
import BlogDetail from '@/modules/blog/components/BlogDetail';
import { CommentItemProps } from '@/common/types/blog';
import { getBlogViews } from '@/services/view';

interface Params {
  content: string;
  slug: string;
}

interface LearnContentDetailPageProps {
  params: Params;
}

export async function generateMetadata(
  { params }: LearnContentDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getContentDetail(params);
  return {
    title: `${data.title} ${METADATA.exTitle}`,
    openGraph: {
      url: METADATA.openGraph.url,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: METADATA.creator
    },
    category: data.category,
    keywords: data.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/learn/${params.content}/${params.slug}`
    }
  };
}

export default async function LearnContentDetailPage({ params }: LearnContentDetailPageProps) {
  const data = await getContentDetail(params);
  const pageViewCount = await getBlogViews(data.id as string);
  const comments = await getComments(data.id as string);
  return (
    <>
      <Container data-aos="fade-up">
        <BackButton url={`/learn`}/>
        {data && (
          <>
            <BlogDetail blog={data} pageViewCount={pageViewCount} comments={comments} />
            <Breakline className="mt-14 mb-14" />
          </>
        )}
      </Container>
    </>
  );
}

async function getContentDetail(params: Params) {
  const response = await axios.get(`${DEV_TO_URL}/api/articles/rupadana/${params.slug}`)

  if (response?.status !== 200) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }
  return response.data;
}

async function getComments(postId: string): Promise<CommentItemProps[]> {
  const DEV_TO_URL = `https://dev.to/api/comments/?a_id=${postId}`;
  const response = await axios.get(DEV_TO_URL, {
    headers: {
      'api-key': process.env.DEVTO_KEY
    }
  });
  if (response?.status !== 200) return [];
  return response.data;
}
