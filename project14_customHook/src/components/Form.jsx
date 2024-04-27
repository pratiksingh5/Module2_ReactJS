import { useState } from "react";
import useForm from "../hooks/useForm";

function Form() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const a =  useForm();
  // console.log("a", a)

  const {values, errors, handleChange, handleSubmit} = useForm()

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log("function is working");
  //   // console.log("name", name);
  //   // console.log("password", password);

  //   if (name.trim() !== "") {
  //     // console.log("form continue kro");
  //     setNameError("");
  //   } else {
  //     // console.log("warning do");
  //     setNameError("Name is Required");
  //   }

  //   if (password.trim() !== "") {
  //     console.log("pass form continue kro");
  //     setPasswordError("");
  //   } else {
  //     console.log("Password is required");
  //     setPasswordError("Password is required");

  //     // console.log("pass warning do");
  //   }

  //   console.log("Form is valid");
  //   // setName("");
  //   // setPassword("")
  // };

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Username"
            value={values.name}
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
            onChange={(e) => handleChange(e)}
          />
          {errors.name ? (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
            value={values.password}

            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            onChange={(e) => handleChange(e)}

          />
          {errors.password ? (
            <p className="text-red-500 text-xs italic">{errors.password }</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
