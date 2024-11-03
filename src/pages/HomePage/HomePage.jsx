import styles from "./HomePage.module.css";
import PropTypes from "prop-types";

export default function HomePage({ children }) {
  return <main className={styles.main}>{children}</main>;
}

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
};
