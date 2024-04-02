"use client";
import React from "react";
import RegisterForm from "./register-form";

// type FormValues = z.infer<typeof formSchema>

const Register = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Register</h1>
      <div className='flex justify-center'>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
