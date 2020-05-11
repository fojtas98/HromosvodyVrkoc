import React from "react";
import Order from "./Order";

const Contacts = () => {
  return (
    <div className="contacts">
      {/* <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282.3378657935334!2d14.658882816438117!3d49.99868867683651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b8bfd6fdcb2fb%3A0xb9f109a71071d1ae!2zQmFyw6Frb3ZhIDYxLCAyNTEgMDEgxZjDrcSNYW55!5e0!3m2!1scs!2scz!4v1588776222036!5m2!1scs!2scz"
          width="400"
          height="300"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen="false"
          aria-hidden="false"
          tabindex="0"
        />
      </div> */}
      <div>
        <h3>E-mail </h3>

        <a href="mailto:hromosvody.vrkoc@gmail.com ">
          hromosvody.vrkoc@gmail.com
        </a>
      </div>
      <div>
        <h3>Telefon </h3>
        <a href="tel:+420 604 340 473">+420 604 340 473</a>
      </div>
      <div>
        <h3>Okres</h3>
        <a href="https://www.google.com/maps/place/251+01+%C5%98%C3%AD%C4%8Dany/@50.0034757,14.6184573,12.21z/data=!4m5!3m4!1s0x470b8944f329c311:0x400af0f6615c650!8m2!3d49.9916782!4d14.6542758">
          Říčany, Praha-východ
        </a>
      </div>
    </div>
  );
};

export default Contacts;
