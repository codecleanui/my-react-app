import MyForm from "../../../lib/react-form/example";
import FormGenerator from "./_components/generateForm/form";
import styles from "./page.module.scss";

const QrGeneratorPage = () => {
  return (
    <div className={styles.root}>
      <FormGenerator />
      {/* <MyForm/> */}
    </div>
  );
};

export default QrGeneratorPage;
