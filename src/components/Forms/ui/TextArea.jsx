import styles from "./TextArea.module.css";
import Label from "./Label";
import PropTypes from "prop-types";

export default function TextArea({ id, name, label, placeholder, ...props }) {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea
        id={id}
        name={name}
        className={styles.textarea}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
}

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
