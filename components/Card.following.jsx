import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
const Card = ({ name, description, height }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: height,
        display: "flex",
        flexDirection: "column",
        marginBottom: "1.5rem",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      className={styles.Card}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 6,
          textAlign: "left",
        }}
      >
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
