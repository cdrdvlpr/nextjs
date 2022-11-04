import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Users.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { users: data },
  };
};

export default function Users({ users }) {
  return (
    <>
      <Head>
        <title>My site | Users</title>
      </Head>
      <h1>All Users</h1>
      {users.map((user) => (
        <div className={styles.container} key={user.id}>
          <Link className={styles.single} href={`/users/${user.id}`}>
            <h3>{user.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
}
