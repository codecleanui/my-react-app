import { Card, Text } from "@mantine/core";
import { AppShell } from "@mantine/core";
import { CustomHeader } from "../../components";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { navLinks } from "./config";
import { useDisplayNameFinder } from "../../lib/url/helper";
import { useDisclosure } from "@mantine/hooks";

export function AppShellContainer() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 240, breakpoint: "sm", collapsed: { mobile: !opened }, }}
    >
      <AppShell.Header>
        <CustomHeader opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Card>
          <Card.Section withBorder inheritPadding py="sm">
            <Outlet />
          </Card.Section>
        </Card>
      </AppShell.Main>
    </AppShell>
  );
}
