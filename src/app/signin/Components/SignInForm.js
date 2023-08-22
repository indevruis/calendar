import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "public/css/SignInForm.module.css";

const SignInForm = () => {
  return (
    <div className={`${styles.loginBox}`}>
      <div className={`${styles.logo}`}>
        <Link href={"/"}>logo</Link>
      </div>
      <div className={`${styles.id} flex flex-col items-center`}>
        <input
          type="text"
          placeholder="아이디"
          className={`${styles.idInput}`}
        />
        <FontAwesomeIcon icon={faUser} className={`${styles.loginIcon}`} />
      </div>
      <div className={`${styles.pwd} flex flex-col items-center`}>
        <input
          type="password"
          placeholder="비밀번호"
          className={`${styles.pwdInput}`}
        />
        <FontAwesomeIcon icon={faLock} className={`${styles.loginIcon}`} />
      </div>
      <div className="flex flex-col items-center">
        <button type="submit" className={`${styles.loginBtn}`}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
