import React from 'react';

import { MenuItemProps } from '@/common/types/menu';

import MenuItem from './MenuItem';
import { BiCommand } from 'react-icons/bi';
import { useCommand } from '@/context/command';

type MenuProps = {
  title?: string;
  list: MenuItemProps[];
};
export default function Menu({ title, list }: MenuProps) {

  const { showCommand } = useCommand();
  return (
    <div className="flex flex-col space-y-1 lg:p-0">
      {title && (
        <div className="hidden lg:block text-sm ml-2 mt-1 mb-2 text-neutral-600 dark:text-neutral-500 font-sora">
          {title}
        </div>
      )}
      {list?.map((item: MenuItemProps, index: number) => <MenuItem key={index} {...item} />)}
      <MenuItem {...{
        title: 'CMD + K',
        href: '#',
        icon: <BiCommand size={24} />,
        isShow: true,
        isExternal: false,
        eventName: 'Pages: Command',
        hideInCommand: true,
        onClick: () => {
          showCommand()
        }
      }} />
    </div>
  );
}
