// import { Avatar, Flex, Paper, Text } from "@mantine/core";
// import { IconLogout, IconWebhook } from "@tabler/icons-react";
// import { CustomActionButton,  SwitchToggle } from "..";
// import { logout } from "../../api";

// export const CustomHeader = () => {
//   return (
//     <Paper
//       withBorder
//       radius="xl"
//       px={10}
//       className=" shadow-lg"
//       mb={40}
//       sx={(theme) => ({
//         top: 10,
//         left: 240,
//         right: 40,
//         position: "fixed",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexDirection: "row",
//         [theme.fn.smallerThan("sm")]: {
//           left: 10,
//           right: 10,
//         },
//       })}
//     >
//       <Flex
//         sx={{
//           alignItems: "center",
//           justifyContent: "flex-start",
//           flexDirection: "row",
//           gap: 0,
//           padding: 4,
//         }}
//       >
//         <Avatar
//           radius="xl"
//           className=" shadow-xl"
//           sx={(theme) => ({
//             [theme.fn.smallerThan("md")]: {
//               padding: `calc(${theme.spacing.sm} * 0.5)`,
//             },
//           })}
//         >
//           <IconWebhook size="2rem" />
//           {/* <Text
//                   color="white"
//                   size="sm"
//                   sx={(theme) => ({
//                     [theme.fn.smallerThan("sm")]: {
//                       fontSize: `calc(${theme.spacing.xs} * 1)`,
//                     },
//                   })}
//                 >
//                   A
//                 </Text> */}
//         </Avatar>

//         <Text
//           px={15}
//           align="center"
//           size="md"
//           sx={(theme) => ({
//             fontWeight: 700,
//             [theme.fn.smallerThan("sm")]: {
//               fontSize: `calc(${theme.spacing.sm} * 1)`,
//             },
//           })}
//         >
//           AMN CORPRATION
//         </Text>
//       </Flex>
//       <Flex gap={10}>
//         <CustomActionButton onClick={
//           () => logout()
//         }>
//           <IconLogout />
//         </CustomActionButton>
//         <SwitchToggle />
//       </Flex>
//     </Paper>
//   );
// };

import { Menu, Group, Center, Burger, Container, Avatar } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconWebhook } from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";

const links = [];

export function CustomHeader() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Avatar
            radius="xl"
            className=" shadow-xl"
          >
            <IconWebhook size="2rem" />
          </Avatar>

          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
