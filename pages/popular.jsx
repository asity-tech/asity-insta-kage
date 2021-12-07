import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const popular = () => {
  return (
    <Layout>
      This is a popular section!
      <div>Here's a div inside that</div>
    </Layout>
  );
};

export default popular;
