import React from "react";
import { useState } from "react";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          value={firstName}
          type="text"
          name="firstName"
          placeholder="type first name here"
          id="firstName"
        />
        <label htmlFor="LastName">Last Name</label>
        <input
          value={lastName}
          type="text"
          name="lastName"
          placeholder="type last name here"
          id="lastName"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          name="email"
          placeholder="type email here"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          name="password"
          placeholder="type password here"
          id="password"
        />
        <button> LOGIN</button>
      </form>
      <button> Already have an account? Login here.</button>
    </>
  );
}
