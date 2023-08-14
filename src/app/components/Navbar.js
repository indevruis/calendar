import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "public/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar_links">
        <div className="navbar_logo">
          <Link href="/" style={{ color: "black" }}>
            logo
          </Link>
        </div>
        <Link href="/calendar">Calendar</Link>
      </div>
      <div className="navbar_Buttons">
        <div className="navbar_search">
          <input type="text" placeholder="search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </div>
        <Link href="/login" className="signButtons">
          sign in
        </Link>
      </div>
    </nav>
  );
}
