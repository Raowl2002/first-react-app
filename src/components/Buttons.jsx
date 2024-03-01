import Styles from "./Buttons.module.css";
const Buttons = ({ handleButtonClick }) => {
  const buttons = [
    "C All",
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    ".",
  ];
  return (
    <div className={Styles.buttonsContainer}>
      {buttons.map((item) => {
        return (
          <button
            key={item}
            className={Styles.buttons}
            onClick={() => {
              handleButtonClick(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
