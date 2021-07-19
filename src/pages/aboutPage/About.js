import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <div>
      <div>
        <p className={style.aboutHeader}>About Us</p>
      </div>
      <div className={style.section}>
        <div className={style.Container}>
          <h2>History:</h2>
          <p>
            Miraj Din Sons Engineering Works is one of the Oldest And
            Experienced name in Okara's History. In 1975 Mr Miraj Din (Late) and
            His Brother Sufi Abdul Aziz ( Late ) started this Business With a
            long term Planing. In the beginning Mr Miraj Din entered into this
            field as a worker and after the struggling journey of Getting
            Experience from different factories he Established his own Workshop
            by the Grace of Allah Almighty. He introduced Oil Expeller machine
            in Okara beacuse of the business of Oil industry Was at it's peak by
            that Time.
          </p>
          <p>
            And with the passage of Time when the trend changes we have
            introduced several other Items like Grinding Machine ( Atta Chaki )
            , Wheat Cleaner ( Gandum Chan' na ) . And Now Alhamdulillah We are
            offering All of these items to our Respected Customers.
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default About;
