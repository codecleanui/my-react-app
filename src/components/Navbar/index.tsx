import { Group, Code, ScrollArea, rem } from '@mantine/core';
import {
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconQrcode,
} from '@tabler/icons-react';
import classes from './navbar.module.css';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'QR Generator',
    icon: IconQrcode,
    links: [
      {
        label: 'Central',
        link: 'sr-central',
        displayName: 'Central Shipping Region',
      },
      {
        label: 'North East',
        link: 'sr-north-east',
        displayName: 'North East Shipping Region',
      },
      {
        label: 'South',
        link: 'sr-south',
        displayName: 'South Shipping Region',
      },
      {
        label: 'North West',
        link: 'sr-north-west',
        displayName: 'North West Shipping Region',
      },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
];
import { useState } from 'react';
import {  Box, Collapse, ThemeIcon, Text, UnstyledButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

 function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const pathname = window.location.pathname
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link,key) => (
      <Link
          to={link.link}
          key={key + link.label}
          className={`${classes.linkNavbarLinksGroup} ${
            pathname.includes(link.link) && classes.activeLink
          }`}
        >
          {link.label}
        </Link>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.controlNavbarLinksGroup}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevronNavbarLinksGroup}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}



function Navbar() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return ( 
    <nav className={classes.navbar}>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
      </div>
    </nav>
  );
}

export default Navbar