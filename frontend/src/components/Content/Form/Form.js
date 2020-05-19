import React, { useState } from "react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

import "./Form.css";
import { parse } from "graphql";

const callQuery = gql`
  query handleEmails($EmailData: emailInputData) {
    handleEmails(EmailData: $EmailData)
  }
`;

const Form = () => {
  const [postForm, { loading, data, error }] = useLazyQuery(callQuery);
  const [formData, setFormData] = useState({
    obvodBudovy: undefined,
    vyskaBudovy: undefined,
    vyskaBudovyKOkapu: undefined,
    delkaHrebenu: undefined,
    typStresniKrytiny: "",
    antena: undefined,
    zemneni: undefined,
    jmeno: "",
    mesto: "",
    ulice: "",
    tel: undefined,
    email: "",
    poznamky: "",
  });

  const handleFormData = (event) => {
    const { name, value, type } = event.target;
    console.log(value);
    console.log(formData);
    if (type === "number") {
      setFormData((prevState) => {
        return { ...prevState, [name]: parseInt(value, 10) };
      });
    } else if (type === "radio") {
      setFormData((prevState) => {
        return { ...prevState, [name]: value === "yes" };
      });
    } else {
      setFormData((prevState) => {
        return { ...prevState, [name]: value };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postForm({ variables: { EmailData: { ...formData } } }, data);
  };

  return (
    <div>
      <form className="orderForm">
        <div>
          <label>Obvod budovy:</label>
          <input
            type="number"
            name="obvodBudovy"
            value={formData.obvodBudovy}
            onChange={(e) => handleFormData(e)}
            placeholder="Uvádějte v metrech"
          />
        </div>
        <div>
          <label>Výška budovy:</label>
          <input
            type="number"
            name="vyskaBudovy"
            value={formData.vyskaBudovy}
            onChange={handleFormData}
            placeholder="Uvádějte v metrech"
          />
        </div>
        <div>
          <label>Výška budovy k okapu:</label>
          <input
            type="number"
            name="vyskaBudovyKOkapu"
            value={formData.vyskaBudovyKOkapu}
            onChange={handleFormData}
            placeholder="Uvádějte v metrech"
          />
        </div>
        <div>
          <label>Délka hřebenu:</label>
          <input
            type="number"
            name="delkaHrebenu"
            value={formData.delkaHrebenu}
            onChange={handleFormData}
            placeholder="Uvádějte v metrech"
          />
        </div>
        <div>
          <label>Typ střešní krytiny:</label>
          <input
            type="text"
            name="typStresniKrytiny"
            value={formData.typStresniKrytiny}
            onChange={handleFormData}
            placeholder="Tašky, plech,.."
          />
        </div>
        <div>
          <label>Anténa:</label>
          <div>
            <label>
              Ano
              <input
                type="radio"
                name="antena"
                value="yes"
                checked={formData.antena === true}
                onChange={handleFormData}
              />
            </label>
            <label>
              Ne
              <input
                type="radio"
                name="antena"
                value="no"
                checked={formData.antena === false}
                onChange={handleFormData}
              />
            </label>
          </div>
        </div>
        <div>
          <label>Zemnění:</label>
          <div>
            <label>
              Ano
              <input
                type="radio"
                name="zemneni"
                value="yes"
                checked={formData.zemneni === true}
                onChange={handleFormData}
              />
            </label>
            <label>
              Ne
              <input
                type="radio"
                name="zemneni"
                value="no"
                checked={formData.zemneni === false}
                onChange={handleFormData}
              />
            </label>
          </div>
        </div>
        <div>
          <label>Jméno:</label>
          <input
            type="text"
            name="jmeno"
            value={formData.jmeno}
            onChange={handleFormData}
            placeholder="Josef Novák"
          />
        </div>
        <div>
          <label>Město, PSČ:</label>
          <input
            type="text"
            name="mesto"
            value={formData.mesto}
            onChange={handleFormData}
            placeholder="Praha, 100 01"
          />
        </div>
        <div>
          <label>Ulice č.p.:</label>
          <input
            type="text"
            name="ulice"
            value={formData.ulice}
            onChange={handleFormData}
            placeholder="Květinová 53"
          />
        </div>
        <div>
          <label>Tel.:</label>
          <input
            type="number"
            name="tel"
            value={formData.tel}
            onChange={handleFormData}
            placeholder="123456789"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleFormData}
            placeholder="vášEmail@email.cz"
          />
        </div>
        <div>
          <label>Poznámky:</label>
          <textarea
            rows="4"
            name="poznamky"
            value={formData.poznamky}
            onChange={handleFormData}
            placeholder="Prostor pro poznámky"
          />
        </div>
        <button onClick={handleSubmit} value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

// const schema = {
//     query: `
//     query {
//     handleEmails(EmailData: {obvodBudovy: ${formData.obvodBudovy}, vyskaBudovy: ${formData.vyskaBudovy}, vyskaBudovyKOkapu: ${formData.vyskaBudovyKOkapu}, delkaHrebenu: ${formData.delkaHrebenu}, typStresniKrytiny: "${formData.typStresniKrytiny}", antena: ${formData.antena}, zemneni: ${formData.zemneni}, jmeno: "${formData.jmeno}", mesto: "${formData.mesto}", ulice: "${formData.ulice}", tel: ${formData.tel}, email: "${formData.email}", poznamky: "${formData.poznamky}"}) {
//         Boolean
//     }
//     }
// `,
// };
// fetch("http://localhost:5005/graphql", {
// method: "POST",
// body: JSON.stringify(schema),
// headers: {
// "Content-Type": "application/json",
// },
// })
// .then((res) => {
// if ((res.status !== 200) & (res.status !== 201)) {
// throw new Error("Failed");
// }
// return res.json();
// })
// .then((resData) => {
// console.log(resData);
// })
// .catch((err) => {
// console.log(err);
// });
