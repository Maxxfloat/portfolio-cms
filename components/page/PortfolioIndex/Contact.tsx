import React from "react";
import { useForm } from "react-hook-form";
const Contact = () => {
  const { handleSubmit, register } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <input {...register("firstName")} />
          <input {...register("lastName")} />
        </div>
        <input {...register("subject")} />
        <input {...register("message")} />
      </form>
    </div>
  );
};

export default Contact;
