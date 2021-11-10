import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleInputChange = (e) => {
    const { input, value } = e.target;
    if (input === "userName") {
      setUserName(value);
    } else if (input === "email") {
      setEmail(value);
    } else {
      setBody(value);
    }
    // return name === "userName" ? setUserName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you for your submission ${userName}`);
    setUserName("");
    setEmail("");
    setBody("");
  };

  return (
    <div className="container">
      <h1>Contact</h1>
      <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="First and last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email address"
        />
        <label>Type your message below</label>
        <textarea
          name="body"
          type="text"
          placeholder="What would you like to say?"
        />
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

      <form class="p-4 p-md-5 border rounded-3 bg-light">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-success" type="submit">
          Submit
        </button>
        <hr class="my-4" />
      </form>
    </div>
  );
}
