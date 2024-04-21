'use client';

import { PropsWithChildren, createContext, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  DashboardIcon,
  BoxIcon,
  FileIcon,
  TimeZoneIcon,
  TruckIcon,
  TeamIcon,
  QuestionIcon,
  LogoutIcon,
} from '@/components/Icons';
import { UserMenu } from './UserMenu';

interface CurrentUserContextType {
  username: string;
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null);

const sidebarMenu = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'Products',
    link: '/products',
    icon: BoxIcon,
  },
  {
    name: 'Orders',
    link: '/',
    icon: FileIcon,
  },
  {
    name: 'Shipments',
    link: '/',
    icon: TimeZoneIcon,
  },
  {
    name: 'Vehicles',
    link: '/',
    icon: TruckIcon,
  },
  {
    name: 'Customers',
    link: '/',
    icon: TeamIcon,
  },
];

const SidebarLink = (
  props: PropsWithChildren<{ href: string; isDanger?: boolean }>
) => {
  const { href, children, isDanger = false } = props;
  const currentPath = usePathname();
  const active = currentPath == href;
  return (
    <li
      style={
        {
          '--fill':
            (!active && !isDanger && '#908C95') ||
            (active && '#6E3FF3') ||
            (isDanger && '#F31B09'),
        } as any
      }
      className={[
        'py-2 px-4 rounded-[8px] transition-all',
        (!active &&
          !isDanger &&
          'text-secondary-500 hover:bg-secondary-200/40') ||
          (active && 'text-primary bg-primary/10') ||
          (isDanger && 'text-danger hover:bg-danger/10'),
      ].join(' ')}
    >
      <Link href={href} className="flex items-center gap-2 text-sm">
        {children}
      </Link>
    </li>
  );
};

export const Sidebar = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUserContextType>({
    username: "filiptammergard",
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <section className="sidebar hidden lg:block w-[240px] bg-secondary-75">
        <div className="flex flex-col h-full px-6 py-8">
          <div className="mb-8 font-bold text-2xl">
            <Image src={'/brand-logo.svg'} width={32} height={32} alt="Logo" />
          </div>
          <nav className="sidebar__nav">
            <ul className="space-y-2">
              {sidebarMenu.map((item, i) => (
                <SidebarLink key={i} href={item.link}>
                  <item.icon />
                  {item.name}
                </SidebarLink>
              ))}
            </ul>
          </nav>
          <div className="mt-auto">
            <div className="dropdown mb-2">
              <UserMenu />
            </div>
            <nav className="sidebar__nav">
              <ul>
                <SidebarLink href="#">
                  <QuestionIcon />
                  Help & Support
                </SidebarLink>
                <SidebarLink isDanger href="#">
                  <LogoutIcon />
                  Sign Out
                </SidebarLink>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </CurrentUserContext.Provider>
  );
};
