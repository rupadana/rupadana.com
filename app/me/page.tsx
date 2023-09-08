import { Metadata } from 'next';

import React from 'react';

import { METADATA } from '@/common/constant/metadata';

import MeSection from '@/modules/me';

export const metadata: Metadata = {
  title: `Hi! ${METADATA.exTitle}`,
  description: 'Programming tips for developer',
  keywords: 'backend developer, laravel, filamentphp',
  alternates: {
    canonical: `${process.env.DOMAIN}/me`
  }
};

export default function MePage() {
  return <MeSection />;
}
