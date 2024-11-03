import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ type = "button", children }) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
