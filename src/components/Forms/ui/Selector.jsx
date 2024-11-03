import styles from "./Selector.module.css";
import Label from "./Label";
import PropTypes from "prop-types";

export default function Selector({
  id,
  name,
  label,
  placeholder,
  children,
  ...props
}) {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <select
        id={id}
        name={name}
        className={styles.selector}
        placeholder={placeholder}
        defaultValue=""
        {...props}
      >
        <option value="" disabled>
          Select an option...
        </option>
        {children}
      </select>
    </>
  );
}

Selector.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node.isRequired,
};
