import SingleProduct from "./SingleProduct";
import React from "react";

export default function editProduct() {
  const [editProductById, setEditProductById] = useState("");
  return (
    <>
      <div>
        <form action="post">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            name="title"
            placeholder="Enter product name here"
          />
        </form>
      </div>
    </>
  );
}
