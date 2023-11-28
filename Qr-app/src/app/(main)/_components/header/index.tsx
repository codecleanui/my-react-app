import { IconLogout, IconMoon, IconSun, IconWebhook } from "@tabler/icons-react";
import styles from "./headerMenu.module.scss";
import {
  ActionIcon,
  Flex,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { logout } from "../../../../api";

export function Header() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <header className={styles.header}>
      <IconWebhook size="2rem" />

      <Flex gap={6}>
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          variant="outline"
          size="md"
        >
          {computedColorScheme == "light" && (
            <IconSun size="1.1rem"  />
          )}
          {computedColorScheme == "dark" && (
            <IconMoon size="1.1rem" />
          )}
        </ActionIcon>
        <ActionIcon onClick={logout} variant="outline">
           <IconLogout size="1.3rem" stroke={1.5} />
        </ActionIcon>
      </Flex>
    </header>
  );
}
