// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Navbar as MantineNavbar,
//   Card,
//   Flex,
//   Text,
//   createStyles,
//   rem,
//   Collapse,
//   Group,
//   UnstyledButton,
//   Stack,
// } from "@mantine/core";
// import styles from "./navbar.module.scss";
// import {
//   IconChevronLeft,
//   IconChevronRight,
//   IconQrcode,
// } from "@tabler/icons-react";
// import { NavItemProps, NavLinksGroupTitleProps, NavbarProps } from "./type";

// const useStyles = createStyles((theme) => ({
//   control: {
//     fontWeight: 500,
//     display: "block",
//     width: "100%",
//     padding: `4px 4px`,
//     color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
//     fontSize: '16px',
//     textDecoration: "none",

//     "&:hover": {
//       backgroundColor:
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[7]
//           : theme.colors.gray[0],
//       color: theme.colorScheme === "dark" ? theme.white : theme.black,
//     },
//   },

//   activeControl: {
//     fontWeight: 700,
//   },

//   link: {
//     fontWeight: 500,
//     display: "block",
//     textDecoration: "none",
//     padding: `${theme.spacing.xs} ${theme.spacing.md}`,
//     paddingLeft: rem(31),
//     marginLeft: rem(30),
//     fontSize: '13px',
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[0]
//         : theme.colors.gray[7],
//     borderLeft: `${rem(1)} solid ${
//       theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
//     }`,

//     "&:hover": {
//       backgroundColor:
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[7]
//           : theme.colors.gray[0],
//       color: theme.colorScheme === "dark" ? theme.white : theme.black,
//     },
//   },

//   activeLink: {
//     backgroundColor:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[7]
//         : theme.colors.gray[0],
//     color:
//       theme.colorScheme === "dark" ? theme.colors.white : theme.colors.dark,
//   },

//   chevron: {
//     transition: "transform 200ms ease",
//   },
// }));

// function NavLinksGroup({ icon: Icon, label, link, links }: NavItemProps) {
//   const { classes, theme } = useStyles();
//   const pathname = window.location.pathname;

//   const hasLinks = Array.isArray(links);
//   const [opened, setOpened] = useState(false);
//   const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
//   const items = (hasLinks ? links : []).map((link, key) => {
//     if (link.label != "") {
//       return (
//         <Link
//           to={link.link}
//           key={key + link.label}
//           className={`${classes.link} ${
//             link.link === pathname && classes.activeLink
//           }`}
//         >
//           {link.label}
//         </Link>
//       );
//     } else {
//       return <div key={key + link.label}></div>;
//     }
//   });
//   return (
//     <>
//       {link ? (
//         <Link
//           to={link}
//           className={`${classes.control} ${
//             link === pathname && classes.activeControl
//           }`}
//         >
//           <Group position="apart" spacing={0}>
//             <Flex align={"center"}>
//               <Icon
//                 size="1.4rem"
//                 stroke={1.2}
//                 className={styles.navlinksLinkIcon}
//               />
//               <Text className={styles.navlinksLinkLabel}>{label}</Text>
//             </Flex>
//           </Group>
//         </Link>
//       ) : (
//         <UnstyledButton
//           onClick={() => {
//             if (hasLinks) {
//               setOpened((o) => !o);
//               return;
//             }
//           }}
//           className={classes.control}
//         >
//           <Group position="apart" spacing={4}>
//             <Flex align={"center"} >
//               <Icon
//                 size="1.4rem"
//                 stroke={1.2}
//                 className={styles.navlinksLinkIcon}
//               />
//               <Text className={styles.navlinksLinkLabel}>{label}</Text>
//             </Flex>
//             {hasLinks && (
//               <ChevronIcon
//                 className={classes.chevron}
//                 size="1rem"
//                 stroke={1.5}
//                 style={{
//                   transform: opened
//                     ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
//                     : "none",
//                 }}
//               />
//             )}
//           </Group>
//         </UnstyledButton>
//       )}
//       {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
//     </>
//   );
// }

// const NavLinksGroupTitle: React.FC<NavLinksGroupTitleProps> = ({
//   title,
//   navItem,
// }) => {
//   return (
//     <>
//       {/* <Card.Section withBorder className={styles.navlinksTitleWrapper}>
//         <Text className={styles.navlinksTitle}>{title}</Text>
//       </Card.Section> */}
//       {navItem.map((item, key) => (
//         <NavLinksGroup key={key + item.label} {...item} />
//       ))}
//     </>
//   );
// };
// export default function Navbar({ data, hidden }: NavbarProps) {
//   return (
//     // <Card className={styles.navlinkRoot} shadow="lg" p={0}>

//     //   {data.map((item, key) => (
//     //     <NavLinksGroupTitle
//     //       key={key + item.title}
//     //       title={item.title}
//     //       navItem={item.children}
//     //     />
//     //   ))}
//     // </Card>
//     <MantineNavbar height={750} width={{ base: 220 }} p="md" bg={'#c9e8ff'}>
//       <MantineNavbar.Section grow mt={50}>
//         <Stack justify="center" spacing={0}>
//           {data.map((item, key) => (
//             <NavLinksGroupTitle
//               key={key + item.title}
//               title={item.title}
//               navItem={item.children}
//             />
//           ))}
//         </Stack>
//       </MantineNavbar.Section>
//       <MantineNavbar.Section>
//         <Stack justify="center" spacing={0}>
//           {/* <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
//         <NavbarLink icon={IconLogout} label="Logout" /> */}
//         </Stack>
//       </MantineNavbar.Section>
//     </MantineNavbar>
//   );
// }
