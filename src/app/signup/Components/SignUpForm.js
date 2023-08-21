import Link from "next/link";
import styles from "public/css/SignUpForm.module.css";

const SignUpForm = () => {
  return (
    <form className={`${styles.box} flex flex-col items-center`}>
      <div className={`${styles.logo}`}>
        <Link href={"/"}>LOGO</Link>
      </div>
      <div className={`flex flex-col justify-center`}>
        <input name="userName" type="text" className={`${styles.input}`} placeholder="이름" autoComplete="off"/>
      </div>
      <div className={`flex flex-col justify-center`}>
        <input name="userId" type="text" className={`${styles.input}`} placeholder="아이디" autoComplete="off"/>
      </div>
      <div className={`flex flex-col justify-center`}>
        <input
          name="userPwd"
          type="password"
          className={`${styles.input}`} placeholder="비밀번호"
          autoComplete="off"
        />
      </div>
      <div className={`flex flex-col justify-center`}>
        <input
          name="userPwd"
          type="password"
          className={`${styles.input}`} placeholder="비밀번호확인"
          autoComplete="off"
        />
      </div>
      <div className={`flex flex-col justify-center`}>
        <button type="submit" className={`${styles.signupBtn}`}>
          회원가입
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
