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

  return (
    <div>
      <form>
        <label for="title">name:</label>
        <input type="text" name="title" />
        <label for="description">description:</label>
        <input type="text" name="description" />
        <p>Have you read it?</p>
        <input id="status" type="checkbox" name="status" />
      </form>
    </div>
  );
}

// When you send off your from data, in the formData useState, you'd kinda want something like this->
