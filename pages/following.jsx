import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import data from "../data";

import Card from "../components/Card.following.jsx";
import { Col, Container, Row } from "react-bootstrap";

const following = () => {
  const [tab, setTab] = useState(1);

  return (
    <Layout tab={tab}>
      <Container fluid className="d-grid container">
        <Row>
          {data.map((el) => {
            return (
              <Col className="col-sm-6 col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <Card
                  name={el.name}
                  description={el.description}
                  height="51vh"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default following;
