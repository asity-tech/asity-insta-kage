import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const popular = () => {
  const [tab, setTab] = useState(2);
  return (
    <Layout tab={tab}>
      This is a popular section!
      <div>Here's a div inside that</div>
    </Layout>
  );
};

export default popular;
