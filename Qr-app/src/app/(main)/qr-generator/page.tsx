import FormGenerator from "./_components/generateForm/form";
import styles from "./page.module.scss";

const QrGeneratorPage = () => {
  return (
    <div className={styles.root}>
      <FormGenerator />
    </div>
  );
};

export default QrGeneratorPage;
