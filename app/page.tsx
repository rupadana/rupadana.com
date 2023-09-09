import { Metadata } from 'next';

import axios from 'axios';

import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';

import { GITHUB_ACCOUNTS, GITHUB_API_BASE_URL, GITHUB_USER_QUERY } from '@/common/constant/github';

import Home from '@/modules/home';

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN
  }
};

export default async function HomePage() {
  const githubData = await getGithubData();
  return (
    <>
      <Container data-aos="fade-up">
        <Home githubData={githubData}/>
      </Container>
    </>
  );
}

async function getGithubData() {
  const response = await axios.post(
    GITHUB_API_BASE_URL,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username: GITHUB_ACCOUNTS.username
      }
    },
    {
      headers: {
        Authorization: `bearer ${GITHUB_ACCOUNTS.token}`
      }
    }
  );
  return response.data?.data.user.contributionsCollection.contributionCalendar;
}