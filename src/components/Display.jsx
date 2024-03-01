import Styles from "./Display.module.css";

const Display = ({ input }) => {
  return (
    <input
      className={Styles.display}
      type="numbers"
      placeholder="0"
      value={input}
      readOnly
    />
  );
};
export default Display;
