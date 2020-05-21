import React, { useState, useContext, useEffect } from "react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

import HromosvodContext from "../context.js";
import "./Form.css";

const callQuery = gql`
  query handleEmails($EmailData: emailInputData) {
    handleEmails(EmailData: $EmailData)
  }
`;

const Form = () => {
  const contextType = useContext(HromosvodContext);

  useEffect(() => {
    setFormData((prevState) => {
      return { ...prevState, hromosvod: contextType.hromosvod };
    });
  }, [contextType]);

  const [postForm, { loading, data, error }] = useLazyQuery(callQuery);

  const [formData, setFormData] = useState({
    hromosvod: "",
    obvodBudovy: "",
    vyskaBudovy: "",
    vyskaBudovyKOkapu: "",
    delkaHrebenu: "",
    typStresniKrytiny: "",
    antena: undefined,
    zemneni: undefined,
    jmeno: "",
    mesto: "",
    ulice: "",
    tel: "",
    email: "",
    poznamky: "",
  });

  console.log(formData);

  const handleFormData = (event) => {
    console.log(formData);
    const { name, value, type } = event.target;
    if (type === "number") {
      if (value <= 0) {
        alert("Vložte pouze pozitivní číslo");
      } else {
        setFormData((prevState) => {
          console.log("here is the trouble");
          return { ...prevState, [name]: parseInt(value, 10) };
        });
      }
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
          <label>Typ hromosvodu:</label>
          <select
            name="hromosvod"
            onChange={handleFormData}
            value={formData.hromosvod}
          >
            <option value="">---Zvolte hromosvod---</option>
            <option value="klasicky">Klasický hromosvod</option>
            <option value="aktivni">Aktivní hromosvod</option>
            <option value="hvi">HVI hromosvod</option>
          </select>
        </div>
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
          <p> 
            <input
              type="radio"
              name="s1"
              id="s1On"
              value="yes"
              hidden=""
            /> 
            <label
              for="s1On"
              class="switch switch--on">
              Ano
            </label> 
            <input
              type="radio"
              name="s1"
              id="s1Off"
              value="no"
              hidden=""
            /> 
            <label
              for="s1Off"
              class="switch switch--off">
              Ne
            </label> 
          </p>          
        </div>

        <div>
          <label>Zemnění:</label>
          <p> 
            <input
              type="radio"
              name="s2"
              id="s2On"
              value="yes"
              hidden=""
            /> 
            <label
              for="s2On"
              class="switch switch--on">
              Ano
            </label> 
            <input
              type="radio"
              name="s2"
              id="s2Off"
              value="no"
              hidden=""
            /> 
            <label
              for="s2Off"
              class="switch switch--off">
              Ne
            </label> 
          </p>          
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
          Odeslat
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




//   PUVODNI ANTENA A ZEMENI

/*
  <div>
    <label>Anténa:</label>
    <div>
      <label className="radio">
        Ano&nbsp;
        <input
          type="radio"
          name="antena"
          value="yes"
          checked={formData.antena === true}
          onChange={handleFormData}
        />
      </label>
      <label className="radio">
        Ne&nbsp;
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
      <label className="radio">
        Ano&nbsp;
        <input
          type="radio"
          name="zemneni"
          value="yes"
          checked={formData.zemneni === true}
          onChange={handleFormData}
        />
      </label>
      <label className="radio">
        Ne&nbsp;
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

*/