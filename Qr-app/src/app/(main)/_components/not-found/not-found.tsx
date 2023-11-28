import { Container, Title, Text, Group } from "@mantine/core";
import React from "react";
import { Illustration } from "./illustration";
import classes from "./not-found.module.scss";
import { NavLink } from "react-router-dom";

export function NotFoundPage({
  baseUrl = "/",
}: {
  baseUrl: string;
}): React.ReactElement {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text
            c="dimmed"
            className={classes.description}
            size="lg"
            ta="center"
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Group justify="center">
            <NavLink to={baseUrl}>Take me back to home page</NavLink>
          </Group>
        </div>
      </div>
    </Container>
  );
}
