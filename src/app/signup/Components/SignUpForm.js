"use client";

import Link from "next/link";
import styles from "public/css/SignUpForm.module.css";
import { useState } from "react";

const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwdConfirm, setUserPwdConfirm] = useState("");

  const [isErrorUserName, setIsErrorUserName] = useState(false);
  const [isErrorUserId, setIsErrorUserId] = useState(false);
  const [isErrorUserPwd, setIsErrorUserPwd] = useState(false);
  const [isErrorUserPwdConfirm, setIsErrorUserPwdConfirm] = useState(false);

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const handleChangeUserPwd = (e) => {
    setUserPwd(e.target.value);
  };

  const handleChangeUserPwdConfirm = (e) => {
    setUserPwdConfirm(e.target.value);
  };

  const handleSubmitFormBtn = async (e) => {
    e.preventDefault();

    const idRegExp = /^[a-zA-Z0-9]{4,15}$/;
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

    const isErrorUserNameCheck = !userName;
    setIsErrorUserName(isErrorUserNameCheck);
    const isErrorUserIdCheck = !idRegExp.test(userId);
    setIsErrorUserId(isErrorUserIdCheck);
    const isErrorUserPwdCheck = !passwordRegExp.test(userPwd);
    setIsErrorUserPwd(isErrorUserPwdCheck);
    const isErrorUserPwdConfirmCheck = userPwd !== userPwdConfirm;
    setIsErrorUserPwdConfirm(isErrorUserPwdConfirmCheck);

    if (
      !(
        isErrorUserIdCheck ||
        isErrorUserPwdCheck ||
        isErrorUserPwdConfirmCheck ||
        isErrorUserNameCheck
      )
    ) {
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          body: JSON.stringify({
            userName: userName,
            userId: userId,
            userPwd: userPwd,
            userPwdConfirm: userPwdConfirm,
          }),
        }).then((res) => {
          if (res.status === 302) window.location.href = "/";
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      className={`${styles.box} flex flex-col items-center`}
      onSubmit={handleSubmitFormBtn}
    >
      <div className={`${styles.logo}`}>
        <Link href={"/"}>LOGO</Link>
      </div>
      <div className={`flex flex-col justify-center`}>
        <input
          name="userName"
          type="text"
          className={`${styles.input}`}
          placeholder="이름"
          autoComplete="off"
          onChange={handleChangeUserName}
        />
      </div>
      {isErrorUserName && (
        <div className={`${styles.regExp}`}>
          <span>이름을 입력해 주세요</span>
        </div>
      )}
      <div className={`flex flex-col justify-center`}>
        <input
          name="userId"
          type="text"
          className={`${styles.input}`}
          placeholder="아이디"
          autoComplete="off"
          onChange={handleChangeUserId}
        />
      </div>
      {isErrorUserId && (
        <div className={`${styles.regExp}`}>
          <span>4~15사이 대소문자 또는 숫자만 입력해 주세요</span>
        </div>
      )}
      <div className={`flex flex-col justify-center`}>
        <input
          name="userPwd"
          type="password"
          className={`${styles.input}`}
          placeholder="비밀번호"
          autoComplete="off"
          onChange={handleChangeUserPwd}
        />
      </div>
      {isErrorUserPwd && (
        <div className={`${styles.regExp}`}>
          <span>숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해 주세요</span>
        </div>
      )}
      <div className={`flex flex-col justify-center`}>
        <input
          name="UserPwdconform"
          type="password"
          className={`${styles.input}`}
          placeholder="비밀번호확인"
          autoComplete="off"
          onChange={handleChangeUserPwdConfirm}
        />
      </div>
        {isErrorUserPwdConfirm && (
          <div className={`${styles.regExp}`}>
            <span>비밀번호가 일치하지 않습니다</span>
          </div>
        )}
      <div className={`flex flex-col justify-center`}>
        <button type="submit" className={`${styles.signupBtn}`}>
          회원가입
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
