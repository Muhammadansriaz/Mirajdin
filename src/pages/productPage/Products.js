import React from "react";
import style from "./Products.module.css";
import machine1 from "../../assests/machine1.jpg";
import machine2 from "../../assests/machine2.jpg";
import machine3 from "../../assests/machine3.jpg";
import machine4 from "../../assests/machine4.JPG";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <div>
        <p className={style.productHeader}>Products</p>
      </div>
      <div class="container" style={{ textAlign: "center" }}>
        <div class="row">
          <div class="col">
            <div className={style.productCard}>
              <img class="card-img-top" src={machine1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Livestock feed pellet</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price: PKR : 200000
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Connection : 15 HP
                </h6>
                <p className="card-text">
                  Livestock feed pellet machine is basically machine which
                  converts animal feed (Wanda) into pellet form. Three face
                  connection is must.
                </p>
                <Link to="/contact">
                  <button className={style.cardBtn}>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div className={style.productCard}>
              <img class="card-img-top" src={machine2} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">The Grinder Machine (Atta Chaki)</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price : PKR : 60000
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Connection : 20HP
                </h6>
                <p className="card-text">
                  This item is available in different sizes . 50 number Atta
                  chaki is a standard size. while 45/50 , 37/50 and 23/45 are
                  also available.
                </p>
                <Link to="/contact">
                  <button className={style.cardBtn}>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ textAlign: "center" }}>
        <div class="row">
          <div class="col">
            <div className={style.productCard}>
              <img class="card-img-top" src={machine3} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Wheat Cleaner ( Gandum Chan'na)</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price : PKR : 50000
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Connection : 2HP
                </h6>
                <p className="card-text">
                  The purpose of this item is to remove the Dust and Small
                  Impurities from Wheat.
                </p>
                <Link to="/contact">
                  <button className={style.cardBtn}>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div className={style.productCard}>
              <img class="card-img-top" src={machine4} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Oil expeller</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price : PKR : 200000
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Connection : 12KW / 15HP
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Capacity: 80 to 100 kg in Our Hour.
                </h6>
                <p className="card-text">
                  Oil expeller is machine which extracts oil from raw products
                  eg seed , nuts especially Mustard seed (Sarso) oil.
                </p>
                <Link to="/contact">
                  <button className={style.cardBtn}>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
