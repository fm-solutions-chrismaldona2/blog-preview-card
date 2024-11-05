import styles from "./CreatePostForm.module.css";
import PropTypes from "prop-types";
import StyledBox from "../../StyledBox/StyledBox";
import Button from "../../Button/Button";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Selector from "../ui/Selector";
import { useState } from "react";

const initialState = {
  title: "",
  description: "",
  category: "",
  thumbnail: null,
};

export default function CreatePostForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <StyledBox>
      <h2 className={styles.form__title}>New post</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__field}>
          <Input
            type="text"
            label="Title"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form__field}>
          <TextArea
            label="Description"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form__field}>
          <Selector
            label="Category"
            id="category"
            name="category"
            value={formData.value}
            onChange={handleChange}
            required
          >
            <option value="Learning">Learning</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
            <option value="Business">Business</option>
            <option value="Art & Culture">Art & Culture</option>
          </Selector>
        </div>
        <div className={styles.form__field}>
          <Input
            type="file"
            accept="image/*"
            label="Thumbnail"
            id="thumbnail"
            name="thumbnail"
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>

      <span className={styles.form__footer}>
        Developed by{" "}
        <a href="https://github.com/chrismaldona2" target="_blank">
          Christian Maldonado
        </a>
      </span>
    </StyledBox>
  );
}

CreatePostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
