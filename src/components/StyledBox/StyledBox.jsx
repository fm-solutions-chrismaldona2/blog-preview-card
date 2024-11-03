import styles from "./StyledBox.module.css";
import PropTypes from "prop-types";

export default function StyledBox({ children }) {
  return <article className={styles.box}>{children}</article>;
}

StyledBox.propTypes = {
  children: PropTypes.node.isRequired,
};
