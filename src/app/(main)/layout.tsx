import { Flex } from "@mantine/core";
import styles from "./layout.module.scss";
import Sidebar from "./_components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "./_components/header";

export default function ShellLayout() {
  return (
    <Flex className={styles.root}>
      <Sidebar />
      <main className={styles.main}>
        <Header />
        <section className={styles.mainOutlet}>
          <Outlet />
        </section>
      </main>
    </Flex>
  );
}
