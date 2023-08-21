'use client'

import SignUpBtn from "./Components/SignUpBtn";
import SignUpForm from './Components/SignUpForm';


const signup = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <SignUpForm />
      <SignUpBtn />
    </div>
  );
};

export default signup;
