"use client";

import Link from "next/link";
import styled from "styled-components";

import { usePathname } from "next/navigation";

const SignBtn = () => {
  const href = usePathname();
  return (
    <SignDiv>
      <span>
        {href === "/signup" ? "계정이 있으신가요? " : "계정이 없으신가요? "}
        <Link href={href === "/signup" ? "/signin" : "/signup" } className="text-skyblue">
          {href === "/signup" ? "로그인" : "회원가입"}
        </Link>
      </span>
    </SignDiv>
  );
};

const SignDiv = styled.div`
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
`;

export default SignBtn;
