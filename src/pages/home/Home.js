// import './App.css';
import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';

export default function App() {
  const{register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = data => {
    console.log(data);
    console.log(data['name']);
    console.log(data['price']);

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <p>Product Name</p>
      <input
        id="name"
        {...register('name', { required: true, maxLength: 8 })}
      />

      {errors.name && errors.name.type === "required" && (
        <span role="alert">Please enter name</span>
      )}

      {errors.name && errors.name.type === "maxLength" && (
        <span role="alert">Name length exceeded</span>
      )}

      <p>Price</p>
      <input
        id="price"
        {...register('price', { required: true, maxLength: 8 })}
      />

      {errors.price && errors.price.type === "required" && (
        <span role="alert">Please enter price</span>
      )}
      {errors.price && errors.price.type === "maxLength" && (
        <span role="alert">Price length exceeded</span>
      )}

      {/* use role="alert" to announce the error message */}
      {/* error must exist, and of type */}



      <Button variant="primary" type="submit">Submit</Button>

    </form>
  );
}
