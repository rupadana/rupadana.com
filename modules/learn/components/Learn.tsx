'use client';

import { motion } from 'framer-motion';

import useSWR from 'swr';
import { ContentProps } from '@/common/types/learn';

import LearnCard from './LearnCard';
import { fetcher } from '@/services/fetcher';
import { useMemo } from 'react';
import clsx from 'clsx';
import useIsMobile from '@/hooks/useIsMobile';
import LoadingCard from '@/common/components/elements/LoadingCard';
import EmptyState from '@/common/components/elements/EmptyState';
import { LEARN_CONTENTS } from '@/common/constant/learn';



export default function LearnModule() {

  if (LEARN_CONTENTS.length === 0 ) {
    return <EmptyState message="No Data" />;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-5 pt-2">
      {LEARN_CONTENTS?.map((content, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <LearnCard {...content} />
        </motion.div>
      ))}
    </div>
  );
}
