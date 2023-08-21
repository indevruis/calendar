import Link from "next/link";
import styled from 'styled-components';

const SignUpBtn = () => {
  return (
    <SignUpDiv className="signup-box">
      <span>
        계정이 있으신가요?{" "}
        <Link href={"/signin"} className="text-skyblue">
          로그인
        </Link>
      </span>
    </SignUpDiv>
  );
};

const SignUpDiv = styled.div`
  width: 400px;
  height: 50px;
  margin-top: 30px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.01);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`

export default SignUpBtn;