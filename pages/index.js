import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My site | Home</title>
      </Head>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi possimus
        consectetur magni error obcaecati modi ea illo in eveniet, architecto
        optio doloremque asperiores dolore nisi quae veniam iure alias dicta.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi possimus
        consectetur magni error obcaecati modi ea illo in eveniet, architecto
        optio doloremque asperiores dolore nisi quae veniam iure alias dicta.
      </p>
      <Link href="/users">See all users</Link>
    </>
  );
}
