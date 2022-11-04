import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  const now = new Date();

  return (
    <div id="app">
      <nav>
        <div className="logo">
          <Image
            src="/ges-transparent.png"
            alt="Logo"
            width={72}
            height={60}
            style={{ mixBlendMode: "darken" }}
          />
        </div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/users">Users</Link>
        </div>
      </nav>
      <div className="content">{children}</div>
      <footer>
        <p>
          Copyright &copy; 2020-{now.getFullYear()}. Mahmoud Kebbeh, All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
