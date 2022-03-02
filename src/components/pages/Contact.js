import React, { useState } from "react";

// TODO: For gods sake make the contact form work
export default function Contact() {
  // **For future use when the form actually submits somewhere
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [body, setBody] = useState("");

  // const handleInputChange = (e) => {
  //   const { input, value } = e.target;
  //   if (input === "userName") {
  //     setUserName(value);
  //   } else if (input === "email") {
  //     setEmail(value);
  //   } else {
  //     setBody(value);
  //   }
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   alert(`Thank you for your submission ${userName}`);
  //   setUserName("");
  //   setEmail("");
  //   setBody("");
  // };

  return (
    <div className="container">
      <h1>Contact</h1>
      <form className="p-4 p-md-5 border rounded-3">
        <div className="mb-3">
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="Name"
          />
          <label for="floatingName">Name</label>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        <label for="floatingText">Type your message here:</label>
        <textarea className="border rounded-3" name="body" type="text" />
        <div className="text-center">
          <button className="w-50 btn btn-lg btn-success" type="submit">
            Submit
          </button>
        </div>
        <hr className="my-4" />
      </form>
    </div>
  );
}
