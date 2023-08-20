import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "/public/signin.css";

const login = () => {
  return (
    <div className="login-background flex-c">
      <div className="login-box">
        <div className="login-logo">
          <Link href={"/"}>logo</Link>
        </div>
        <div className="login-id flex-c">
          <input type="text" placeholder="아이디" />
          <FontAwesomeIcon icon={faUser} className="loginIcon" />
        </div>
        <div className="login-pwd flex-c">
          <input type="password" placeholder="비밀번호" />
          <FontAwesomeIcon icon={faLock} className="loginIcon" />
        </div>
        <div className="flex-c">
          <button type="submit" className="login-button">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
