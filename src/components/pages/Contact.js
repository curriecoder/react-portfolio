import React, { useState } from "react";


export default function Contact () {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === "userName" ? setUserName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    alert(`Thank you for your submission ${userName}`);
    setUserName("");
    setEmail("");
    setBody("");
  };

  return (
    <div>
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
    </div>
  );
}