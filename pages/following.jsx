import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const following = () => {
  return (
    <Layout>
      This is a following section!
      <div>Here's a div inside that</div>
    </Layout>
  );
};

export default following;
