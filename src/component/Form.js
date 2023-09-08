import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <section className="formSec">
      <form className="form" onSubmit={handleSubmit}>
        <img src="" alt />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          placeholder="Image Product"
        />
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title Product"
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="price Product"
        />
        <input
          type="text"
          name="category"
          onChange={handleChange}
          placeholder="Category Product"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Form;
