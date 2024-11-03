import styles from "./Label.module.css";
import PropTypes from "prop-types";

export default function Label({ htmlFor, children }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
