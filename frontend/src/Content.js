import React from "react";
import AdminZone from "./AdminZone/AdminZone";
import Portfolio from "./Portfolio/Portfolio";
import Form from './components/Form/Form.js';

const Content = (props) => {
  return (
    <div className="content">
      {props.admin ? (
        <AdminZone />
      ) : (
        <div>
          <div className="chapter">
            <div className="chapterHeader">
              <h1 id="work">Ukázky realizací</h1>
            </div>
            <div>
              <Portfolio status={false} />
            </div>
          </div>

          <div className="chapter">
            <div className="chapterHeader">
              <h1 id="prices">Ceník</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
                neque. Maecenas aliquet accumsan leo. Etiam bibendum elit eget
                erat. Aenean fermentum risus id tortor. Fusce consectetuer risus
                a nunc. Etiam dictum tincidunt diam. Integer imperdiet lectus
                quis justo. Vestibulum erat nulla, ullamcorper nec, rutrum non,
                nonummy ac, erat. Nam sed tellus id magna elementum tincidunt.
                Aliquam ante. Nulla pulvinar eleifend sem. Nulla turpis magna,
                cursus sit amet, suscipit a, interdum id, felis. Duis viverra
                diam non justo. Praesent vitae arcu tempor neque lacinia
                pretium. Vivamus ac leo pretium faucibus.
              </p>
            </div>
          </div>

          <div className="chapter">
            <div className="chapterHeader">
              <h1 id="order">Kontaktní formulář pro kalkulaci</h1>
            </div>
            <Form />
          </div>

          <div className="chapter">
            <div className="chapterHeader">
              <h1 id="contacts">Kontakty</h1>
            </div>
            <div className="map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282.3378657935334!2d14.658882816438117!3d49.99868867683651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b8bfd6fdcb2fb%3A0xb9f109a71071d1ae!2zQmFyw6Frb3ZhIDYxLCAyNTEgMDEgxZjDrcSNYW55!5e0!3m2!1scs!2scz!4v1588776222036!5m2!1scs!2scz"
                width="400"
                height="300"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
              neque. Maecenas aliquet accumsan leo. Etiam bibendum elit eget
              erat. Aenean fermentum risus id tortor. Fusce consectetuer risus a
              nunc. Etiam dictum tincidunt diam. Integer imperdiet lectus quis
              justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy
              ac, erat. Nam sed tellus id magna elementum tincidunt. Aliquam
              ante. Nulla pulvinar eleifend sem. Nulla turpis magna, cursus sit
              amet, suscipit a, interdum id, felis. Duis viverra diam non justo.
              Praesent vitae arcu tempor neque lacinia pretium. Vivamus ac leo
              pretium faucibus.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
