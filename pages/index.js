import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [insults, setInsults] = useState([]);

      const loadInsults = async () => {
        const res = await fetch("/api/getInsult");
        const fetchedInsults = await res.json();
        setInsults((insults) => setInsults(fetchedInsults));
      };

  useEffect(() => loadInsults(), []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Shakespearean Insult Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Shakespearean Insult Generator</h1>
        <p className={styles.description}>
          {
            insults?.a && insults?.b && insults?.c &&
            `Away with you, you ${insults.a}, ${insults.b} ${insults.c}!`
          }
        </p>
        <button onClick={loadInsults}>Again!</button>
      </main>
    </div>
  );
};

export default Home;
