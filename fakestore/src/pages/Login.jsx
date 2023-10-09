import { useState } from "react";
import AllProducts from "../components/AllProducts";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="login">
        <form className="topright" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="email"
              name="email"
              placeholder="type email here"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              name="password"
              placeholder="type password here"
              id="password"
            />
          </div>

          <button onClick={<AllProducts />}> LOGIN</button>
        </form>
      </div>
    </>
  );
}
