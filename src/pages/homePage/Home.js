import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.homeText}>
      <h1 className={style.headingText}>Welcome to Mirajdin Engineering!</h1>
      <p className={style.paraText}>The Agricultural Machinery Experts.</p>
    </div>
  );
}

export default Home;
