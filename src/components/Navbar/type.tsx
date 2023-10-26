import { TablerIconsProps } from '@tabler/icons-react';

export interface NavItemProps {
  label: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  link?: string;
  links?: {
    label: string;
    link: string;
    displayName?: string;
  }[];
  displayName?: string;
}
export interface NavItemWrapperProps {
  title: string;
  children: NavItemProps[];
}
export interface NavLinksGroupTitleProps {
  title: string;
  navItem: NavItemProps[];
}
export interface NavbarProps {
  data: NavItemWrapperProps[];
  hidden?: boolean;
}