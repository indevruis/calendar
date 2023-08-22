import SignBtn from "../Components/SignBtn";
import SignUpForm from './Components/SignUpForm';

const signup = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <SignUpForm />
      <SignBtn />
    </div>
  );
};

export default signup;
