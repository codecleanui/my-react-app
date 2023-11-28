import { Flex, Skeleton } from "@mantine/core";
import styles from "./loading.module.scss";

export default function LoadingSkeleton() {
  return (
    <Flex className={styles.root}>
      <div className={styles.sidebarMain}>
        <nav data-open={false!} className={styles.sidebarOnSmall}>
          <Skeleton height={"100%"} width={"100%"} />
        </nav>
        <nav data-open={false} className={styles.sidebarOnFull}>
          <Skeleton height={"100%"} width={"100%"} />
        </nav>
      </div>
      <main className={styles.main}>
        <Skeleton height={50} />
        <section className={styles.mainOutlet}>
          <Skeleton height={580} />
        </section>
      </main>
    </Flex>
  );
}
