import {
  MantineProvider as Provider,
  MantineThemeOverride,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { theme as baseTheme } from "./theme";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

export default function MantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme: Partial<MantineThemeOverride> = baseTheme;

  return (
    <Provider theme={theme}>
      <Notifications />

      {children}
    </Provider>
  );
}
