import {
  Switch,
  useMantineColorScheme,
  useMantineTheme,
  Flex,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export const SwitchToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Flex
      justify="center"
      className=" justify-center flex-col"
    >
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => toggleColorScheme()}
        size="sm"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={
          <IconMoonStars
            color={theme.colors.gray[6]}
            size="1.25rem"
            stroke={1.5}
          />
        }
      />
    </Flex>
  );
};

