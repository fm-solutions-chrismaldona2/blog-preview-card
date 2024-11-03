import styles from "./Input.module.css";
import Label from "./Label";
import PropTypes from "prop-types";

export default function Input({
  id,
  name,
  label,
  type = "text",
  placeholder,
  ...props
}) {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        id={id}
        name={name}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
