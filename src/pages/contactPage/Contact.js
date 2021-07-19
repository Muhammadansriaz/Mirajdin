import React from "react";
import style from "./Contact.module.css";
function Contact() {
  return (
    <div>
      <div>
        <p className={style.contactHeader}>Contact Us</p>
      </div>
      <div className={style.section}>
        <div className={style.Container}>
          <div className={style.flx}>
            <div className={style.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.5687203961174!2d73.46208371513342!3d30.81472668160853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a7a1114bf7f1%3A0x820f99a0e590ebc5!2zTWlyYWogRGluIFNvbnMgRW5naW5lZXJpbmcgV29ya3MgT2thcmEgLCBQdW5qYWIgUGFraXN0YW4uICjZhdi52LHYp9isINiv24zZhiDYs9mG2LIg2KfZhtis24zZhtim2LHZhtqvINmI2LHaqdizINin2Yjaqdin2pHbgSk!5e0!3m2!1sen!2s!4v1626023262103!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className={style.contact}>
              <h1>Address:</h1>
              <p>Lahore Road, Near Rehman Cold Store, Okara</p>
              <h1>Contact Us:</h1>
              <table className={style.table}>
                <tbody>
                  <tr>
                    <td>
                      <a href="tel://+923347407242">+92 3347407242</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h1>Social Media:</h1>
              <a
                href="https://www.facebook.com/MirajDinWorkShopOkara/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-facebook-square"></i>
              </a>

              <a
                href="https://wa.link/9b5vo1"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-whatsapp"></i>
              </a>
              <p>
                <b>Email:</b><br />
                <a href="mailto:safdarshahzad52@gmail.com">
                  safdarshahzad52@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
