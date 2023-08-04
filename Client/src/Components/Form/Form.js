import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
  });

  const handleChange = (event) => {
    // deconstructing event.target
    const { name, type } = event.target;
    setFormData({
      ...formData,
      [name]: event.target[type === "checkbox" ? "checked" : "value"],
    });
    console.log(formData);
  };

  function handleSubmit() {
    // function needs id as param
    // axios.put('http://localhost:PORT/books/${id}),
  }
  return (
    <div>
      <h3>Add a new book:</h3>
      <form onSubmit={handleSubmit}>
        <label for="title">name:</label>
        <input name="title" onChange={handleChange}></input>
        <label for="description">description:</label>
        <input name="description" onChange={handleChange}></input>

        <p>Have you read it?</p>
        {/* <input name="user" onChange={handleChange}></input> */}
        <input type="checkbox" onChange={handleChange} name="status"></input>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

// When you send off your from data, in the formData useState, you'd kinda want something like this->
