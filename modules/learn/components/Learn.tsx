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

const SERIES_ENDPOINT = '/api/learn';

export default function LearnModule() {
  const isMobile = useIsMobile();
  let { data, isLoading } = useSWR(`${SERIES_ENDPOINT}`, fetcher);

  const seriesItem: ContentProps[] = useMemo(() => {
    if (data?.status && data?.data && Array.isArray(data?.data)) {
      return data.data;
    }
    return [];
  }, [data]);

  if (isLoading)
    return (
      <div
        className={clsx(
          'gap-5 sm:gap-4',
          isMobile ? 'flex flex-col' : 'grid grid-cols-2 sm:!gap-5'
        )}
      >
        {[1, 2].map(item => (
          <LoadingCard key={item} view='grid' />
        ))}
      </div>
    );

  if (seriesItem.length === 0 && !isLoading) {
    return <EmptyState message="No Data" />;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-5 pt-2">
      {seriesItem?.map((content, index) => (
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
