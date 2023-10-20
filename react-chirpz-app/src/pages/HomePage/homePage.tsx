import React from "react";
import ChirpzList from "../../components/ChirpzListComponent";
import Header from "../../components/Header";
import styles from "./styles.module.css";

const HomePage = (props: any) => {
  return (
    <>
      <Header />
      <ChirpzList />
    </>
  );
};

export default HomePage;
