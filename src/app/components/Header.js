import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlash, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <nav>
      <div className="navbar_links">
        <div className="navbar_logo">
          <Link href="/" style={{ color: "black" }}>
            Logo
          </Link>
          <FontAwesomeIcon icon={faSlash} className="slash_logo" />
          <Link href="/" style={{ color: "black" }}>
            Ruirun
          </Link>
        </div>
        <Link href="/calendar">calendar</Link>
        <Link href="/project">project</Link>
        <Link href="/budget">budget</Link>
        <Link href="/diary">diary</Link>
      </div>
      <div className="navbar_headerButtons">
        <div className="navbar_search">
          <input type="text" placeholder="search" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="magnifying_glass"
          />
        </div>
        <Link href="/" className="signButtons">
          sign in
        </Link>
        <Link href="/" className="signButtons bbbButton">
          sign up
        </Link>
      </div>
    </nav>
  );
}
