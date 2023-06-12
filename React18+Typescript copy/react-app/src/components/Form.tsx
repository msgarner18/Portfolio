import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const [category, setCategory] = useState("");

  const handleCategoryChange = (event: FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Description
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Amount
        </label>
        <input type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Category
        </label>
        <select
          className="form-control"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </form>
    // <form action="" onSubmit={handleSubmit}>
    //   <div className="mb-3">
    //     <label htmlFor="name" className="form-label">
    //       Name
    //     </label>
    //     <input
    //       onChange={(event) =>
    //         setPerson({ ...person, name: event?.target.value })
    //       }
    //       value={person.name}
    //       id="name"
    //       type="text"
    //       className="form-control"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="age" className="form-label">
    //       Age
    //     </label>
    //     <input
    //       onChange={(event) =>
    //         setPerson({ ...person, age: event?.target.value })
    //       }
    //       value={person.age}
    //       id="age"
    //       type="number"
    //       className="form-control"
    //     />
    //   </div>
    //   <button className="btn btn-primary" type="submit">
    //     Submit
    //   </button>
    // </form>
  );
};

export default Form;
