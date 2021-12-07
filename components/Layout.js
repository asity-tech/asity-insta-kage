import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

const Layout = ({ tab, children }) => {
  // const tabState = (index) => {
  //   setTab(index);
  // };

  const clickHandler = (e) => {
    console.log(e.view.window.location.href);
  };

  return (
    <div className={styles.layout}>
      <head>
        <title>Asity</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <nav className={styles.navbar}>
        <h1>Asity</h1>
        <div className={styles.midNav}>
          <i className="fas fa-video"></i>
          <i className="fas fa-plus"></i>
          <i className="fas fa-download"></i>
          <i className="fas fa-share"></i>
        </div>
        <div className={styles.endNav}>
          <i className="fas fa-comment"></i>
          <i className="fas fa-search"></i>
          <i className="fas fa-user"></i>
        </div>
      </nav>
      <div className={styles.swiperNav}>
        <Link href="/">
          <span className={tab === 1 && styles.tabs}>Home</span>
        </Link>
        <Link href="/following">
          <span className={tab === 2 && styles.tabs}>Following</span>
        </Link>
        <Link href="/featured">
          <span className={tab === 3 && styles.tabs}>Featured</span>
        </Link>
      </div>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};

export default Layout;
