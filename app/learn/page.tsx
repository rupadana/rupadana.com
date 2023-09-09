import { Metadata } from 'next';

import * as https from "https";

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { LEARN_CONTENTS } from '@/common/constant/learn';
import { METADATA } from '@/common/constant/metadata';

import LearnModule from '@/modules/learn';
import { ContentProps } from '@/common/types/learn';
import axios from 'axios';
import { fetcher } from '@/services/fetcher';
import getLearnSeries from './data';

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
const filteredContents = LEARN_CONTENTS.filter(content => content.is_show) || [];

export default async function LearnPage() {

  let series = await getLearnSeries();

  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <LearnModule contents={series} />
      </Container>
    </>
  );
}
