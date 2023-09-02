import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div>
        <form className="topright" onSubmit={handleSubmit}>
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
      </div>
      <div>
        <button className="lowerright">
          Dont have an account? Register here.
        </button>
      </div>
    </>
  );
}
