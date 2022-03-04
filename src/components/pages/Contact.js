import React, { useState } from "react";

// TODO: For gods sake make the contact form work

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you for your submission ${userName}`);
    console.log(email);
    console.log(body);
    setUserName("");
    setEmail("");
    setBody("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "userName") {
      setUserName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "body") {
      setBody(value);
    }
  };

  return (
    <div className="container">
      <h1>Contact</h1>
      <form className="p-4 p-md-5 border rounded-3">
        <div className="mb-3">
          <input
            name="userName"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="First Name Last Name"
          />
          <label for="floatingName">Name</label>
        </div>
        <div className="mb-3">
          <input
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="email@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        <label for="floatingText">Type your message here:</label>
        <textarea
          name="body"
          onChange={handleInputChange}
          className="border rounded-3 text-dark"
          type="text"
        />
        <div className="text-center">
          <button
            className="w-50 btn btn-lg btn-success"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
        <hr className="my-4" />
      </form>
    </div>
  );
}
