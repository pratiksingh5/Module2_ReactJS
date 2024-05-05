import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setEmailError("");
    } else {
      setEmailError("Email is Required");
    }
    console.log("Form is valid");
  };

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailError ? (
            <p className="text-red-500 text-xs italic">{emailError}</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
           Subscribe to Newsletter
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
