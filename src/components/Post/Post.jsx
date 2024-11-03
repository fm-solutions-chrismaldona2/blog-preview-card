import styles from "./Post.module.css";
import PropTypes from "prop-types";
import StyledBox from "../StyledBox/StyledBox";

export default function Post({ postData }) {
  const { thumbnail, category, date, title, description, author, link } =
    postData;
  return (
    <StyledBox>
      {link ? (
        <a href={link} target="_blank" className={styles.post__link}>
          <img
            src={thumbnail}
            alt="post thumbnail"
            className={styles.post__thumbnail}
          />

          <div className={styles.post__content}>
            <span className={styles.post__category}>{category}</span>
            <span className={styles.post__date}>Published {date}</span>

            <h2 className={styles.post__title}>{title}</h2>

            <p className={styles.post__description}>{description}</p>
          </div>
        </a>
      ) : (
        <>
          <img
            src={thumbnail}
            alt="post thumbnail"
            className={styles.post__thumbnail}
          />
          <div className={styles.post__content}>
            <span className={styles.post__category}>{category}</span>
            <span className={styles.post__date}>Published {date}</span>

            <h2 className={styles.post__title}>{title}</h2>

            <p className={styles.post__description}>{description}</p>
          </div>
        </>
      )}

      <div className={styles.post__author}>
        <img
          src={author.avatar}
          alt="author avatar"
          className={styles.author__avatar}
        />
        <span className={styles["post__author-name"]}>{author.name}</span>
      </div>
    </StyledBox>
  );
}

Post.propTypes = {
  postData: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
    link: PropTypes.string,
  }).isRequired,
};
