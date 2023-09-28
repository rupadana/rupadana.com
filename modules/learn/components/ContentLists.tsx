'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { ContentProps, SubContentMetaProps } from '@/common/types/learn';

import LearnSubContentItem from './LearnSubContentItem';

interface ContentListsProps {
  sortedSubContents: SubContentMetaProps[];
  title?: string;
  content?: ContentProps;
}
export default function ContentLists({ sortedSubContents, title, content }: ContentListsProps) {
  return (
    <div className="flex flex-col gap-3">
      {sortedSubContents?.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <LearnSubContentItem
            parent={title}
            contentSlug={content?.slug}
            subContentSlug={item?.slug}
            title={item?.title as string}
            language={content?.language as string}
            difficulty={content?.level as string}
          />
        </motion.div>
      ))}
    </div>
  );
}
