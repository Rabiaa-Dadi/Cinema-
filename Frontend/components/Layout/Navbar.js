import React from "react";
import Link from "next/link";


 const Nav = () => {
  return (
    <div className="navbar">
      <div className="navlinks">
      <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/About">
          <p>About</p>
        </Link>
        <Link href="/Contact">
          <p>Contact</p>
        </Link>
        {/* Ajoutez d'autres liens ici */}
      </div>
    </div>
  );
}
export default Nav
