import React, { useState } from "react";

function useForm() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (values.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (values.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        console.log("Form Submitted");
      }

  };



  //   let person = {
  //     name: "Rohan",
  //     age: 23,
  //   };
  //   both are same
  //   console.log(person.age);
  //   console.log(person['age']);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
