import GenerateBarCode from "../../../../../lib/react-barcode";
import style from "./demo-paper.module.scss";

const DemoPaper = () => {
  return (
    <div className={style.letterRoot}>
      <div className={style.letterWrapper}>
        <div className={style.letterHeader}>
          <h1>Your Letter Title</h1>
        </div>
        <div className={style.letterContent}>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between ">
              <div className="border flex flex-col gap-1 items-center justify-center">
                <GenerateBarCode data="Test 1" />
                <p> Test 1</p>
              </div>
              <div className="border flex flex-col gap-1 items-center justify-center">
                <GenerateBarCode data="Test 2" />
                <p> Test 2</p>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="border flex flex-col gap-1 items-center justify-center">
                <GenerateBarCode data="Test 3" />
                <p> Test 3</p>
              </div>
              <div className="border flex flex-col gap-1 items-center justify-center">
                <GenerateBarCode data="Test 4" />
                <p> Test 4</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.letterFooter}></div>
      </div>
    </div>
  );
};

export default DemoPaper;
