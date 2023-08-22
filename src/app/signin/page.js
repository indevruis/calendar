import SignInForm from './Components/SignInForm'
import SignBtn from '../Components/SignBtn'

const signin = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <SignInForm />
      <SignBtn />
    </div>
  );
};

export default signin;
