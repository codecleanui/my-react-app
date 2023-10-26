import { Burger, Container } from "@mantine/core";
import { IconWebhook } from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";

export function CustomHeader({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <IconWebhook size="2rem" />

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </div>
      </Container>
    </header>
  );
}
