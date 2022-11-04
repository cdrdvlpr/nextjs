import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>My site | 404</title>
      </Head>
      <div className="not-found">
        <h2>Oooops!</h2>
        <h3>This page does not exist!</h3>
        <p>
          Go back to the <Link href="/">Homepage</Link>
        </p>
        <Image
          src="/404.png"
          alt="404"
          width={540}
          height={400}
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
    </>
  );
}
