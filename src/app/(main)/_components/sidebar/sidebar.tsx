import {
  Box,
  Burger,
  Flex,
  Menu,
  NavLink,
  ThemeIcon,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import {
  IconCalendarStats,
  IconDashboard,
  IconFileAnalytics,
  IconPresentationAnalytics,
  IconQrcode,
} from "@tabler/icons-react";
import styles from "./sidebar.module.scss";
import {
  useMatch,
  useNavigate,
} from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
export interface SidebarLinks {
  label: string;
  icon?: any;
  link?: string;
  links?: SidebarLinks[];
  displayName?: string;
}

export const sidebarLinks: SidebarLinks[] = [
  {
    label: "Dashboard",
    icon: IconDashboard,
    link: "/dashboard",
    displayName: "Dashboard",
  },
  {
    label: "QR Generator",
    icon: IconQrcode,
    link: "/qr-generator",
    displayName: "QR Generator",
  },

  // { label: "Analytics", icon: IconPresentationAnalytics, link: "/analytics" },
  // { label: "Contracts", icon: IconFileAnalytics, link: "/contracts" },
];

function createNavLinks(links: SidebarLinks[] | undefined, navigate: any) {
  return links?.map((link) => (
    <NavLink
      label={link.label}
      leftSection={
        link.icon && (
          <link.icon size="1.3rem" stroke={1.5} />
        )
      }
      key={link.label}
      active={Boolean(useMatch(link.link ?? ""))}
      onClick={() => link.link && navigate(link.link)}
      className={!link.icon ? styles.sidebarChildren : ""}
    >
      {createNavLinks(link.links, navigate)}
    </NavLink>
  ));
}
function createIconNavLinks(links: SidebarLinks[] | undefined, navigate: any) {
  return links?.map((link, index) => (
    <Tooltip label={link.label} position="right" withArrow key={index}>
      <div>
        <Menu position="right" offset={25}>
          <Menu.Target>
            <UnstyledButton
             onClick={() => link.link && navigate(link.link)}
            >
              <ThemeIcon variant="light" size={30}>
                <link.icon size="1.3rem" stroke={1.5} />
              </ThemeIcon>
            </UnstyledButton>
          </Menu.Target>
          {link.links && (
            <Menu.Dropdown className="p-2">
              {createNavLinks(link.links, navigate)}
            </Menu.Dropdown>
          )}
        </Menu>
      </div>
    </Tooltip>
  ));
}

function Sidebar() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure();

  return (
    <Box className={styles.sidebarMain}>
      <Flex className={styles.sidebarHeader}>
        <Burger opened={opened} onClick={toggle} size="sm" />
      </Flex>
      <nav data-open={opened!} className={styles.sidebarOnSmall}>
        {createIconNavLinks(sidebarLinks, navigate)}
      </nav>
      <nav data-open={opened} className={styles.sidebarOnFull}>
        {createNavLinks(sidebarLinks, navigate)}
      </nav>
    </Box>
  );
}

export default Sidebar;
