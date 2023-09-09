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

  return (
    <>
      <Container data-aos="fade-up">
        <BackButton />
        <ContentDetailHeader {...data} />
        {data && (
          <>
            <ContentDetail content={data.content} />
            <Breakline className="mt-14 mb-14" />
          </>
        )}
      </Container>
    </>
  );
}

async function getContentDetail(params: Params) {
  const ENDPOINT = `${process.env.CMS_API_URL}/learn-contents/${params.content}/${params.slug}`;

  const response = await fetcher(ENDPOINT);
  if (response?.status !== 200) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }
  return response.data.data;
}
