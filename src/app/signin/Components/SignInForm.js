"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "public/css/SignInForm.module.css";
import React, { useState } from "react";

const SignInForm = () => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [loginError, setLoginError] = useState(false);

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangeUserPwd = (e) => {
    setUserPwd(e.target.value);
  };

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify({
          signInUserId: userId,
          signInUserPwd: userPwd,
        }),
      });
      if (response.status === 401) {
        setLoginError(true);
      } else {
        window.location.href = '/'
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      className={`${styles.loginBox} flex flex-col items-center`}
      onSubmit={handleSubmitBtn}
    >
      <div className={`${styles.logo}`}>
        <Link href={"/"}>logo</Link>
      </div>
      <div className={`${styles.id} flex flex-col items-center`}>
        <input
          type="text"
          placeholder="아이디"
          className={`${styles.idInput}`}
          name="inputUserId"
          onChange={onChangeUserId}
          autoComplete="off"
        />
        <FontAwesomeIcon icon={faUser} className={`${styles.loginIcon}`} />
      </div>
      <div className={`${styles.pwd} flex flex-col items-center`}>
        <input
          type="password"
          placeholder="비밀번호"
          className={`${styles.pwdInput}`}
          name="inputUserPwd"
          onChange={onChangeUserPwd}
          autoComplete="off"
        />
        <FontAwesomeIcon icon={faLock} className={`${styles.loginIcon}`} />
      </div>
      {loginError && (
        <div className={`${styles.regExp} `}>
          <span>아이디 또는 비밀번호를 잘못 입력했습니다.</span>
        </div>
      )}
      <div className="flex flex-col items-center">
        <button type="submit" className={`${styles.loginBtn}`}>
          로그인
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
