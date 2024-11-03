import styles from "./PostsGrid.module.css";
import PropTypes from "prop-types";

export default function PostsGrid({ children }) {
  return <section className={styles.posts}>{children}</section>;
}

PostsGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
