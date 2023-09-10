import { Metadata } from 'next';

import * as https from "https";

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { METADATA } from '@/common/constant/metadata';

import LearnModule from '@/modules/learn';

export const metadata: Metadata = {
  title: `Learn ${METADATA.exTitle}`,
  description: 'Programming tips for software developer',
  keywords: 'frontend developer, software engineer, react js, javascript, typescript',
  alternates: {
    canonical: `${process.env.DOMAIN}/learn`
  }
};

const PAGE_TITLE = 'Learn';
const PAGE_DESCRIPTION =
  "It's not a course, it's my personal learning notes. But if you are interested, let's learn together.";


export default async function LearnPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <LearnModule/>
      </Container>
    </>
  );
}
