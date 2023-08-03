import React from "react";

export default function Form() {
  const [formData, setformData] = useState({
    title: "",
    description: "",
    status: false,
  });

  /// handleChange  = event => {
  // let a = {}
  // status.checked ? {status : true} : {status:false}
  //    setFormData({...formData}, [event.target.name] : event.target.value, a)

  //}
  function handleChange(e) {
    let newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
      status: e.target.checked,
    };
    console.log(newFormData);
    setFormData(newFormData);
  }

  //do i need to define handleSumbit and setFormData somewhere? and how?
  return (
    <div>
      <h3>Add a new book:</h3>
      <form onSubmit={handleSubmit}>
        <label for="title">name:</label>
        <input type="text" name="title" onChange={handleChange}></input>
        <label for="description">description:</label>
        <input type="text" name="description" onChange={handleChange}></input>
        <p>Have you read it?</p>
        <input
          id="status"
          type="checkbox"
          name="status"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}

// When you send off your from data, in the formData useState, you'd kinda want something like this->
