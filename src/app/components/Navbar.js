import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "public/css/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.links}`}>
        <div className={`${styles.logo}`}>
          <Link href="/" style={{ color: "black" }}>
            logo
          </Link>
        </div>
        <Link href="/calendar">Calendar</Link>
      </div>
      <div className={`${styles.btns}`}>
        <div className={`${styles.search}`}>
          <input
            type="text"
            className={`${styles.searchInput}`}
            placeholder="search"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`${styles.searchIcon}`}
          />
        </div>
        <Link href="/signin" className={`${styles.signBtn}`}>
          sign in
        </Link>
        <Link href="/signup" className={`${styles.signBtn} ${styles.bbbBtn}`}>
          sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
