import Head from "next/head";
import styles from "../styles/Home.module.css";
import Canvas from "../components/canvas";
import Header from "../components/header";
import GlobalContextProvider from "../context/GlobalContext";

export default function Home() {
  return (
    <GlobalContextProvider>
      <Header />
      <Canvas />
    </GlobalContextProvider>
  );
}
