import React, { useContext } from "react";

import HromosvodContext from "../context.js";

import "./home.css";

const Home = (props) => {
  const contextType = useContext(HromosvodContext);

  const handleClick = (e) => {
    const { id } = e.target;
    props.changeHromosvod(id);
  };

  return (
    <div className="home">
      <p>
        V každém okamžiku probíhá na zemi až 5000 bouřek a mnohé z nich jsou
        doprovázeny blesky, které udeří elektrickým proudem od 20 000 do 200 000
        Ampér. Blesky ohrožují osoby, způsobují požáry, výpadky energetické sítě
        a jiné škody na majetku. Proto je v České republice vytvořena
        legislativa na ochranu staveb a zařízení před bleskem.
      </p>
      <p>
        Nabízíme odbornou montáž, dodávky a revize hromosvodů po celém území
        České republiky od rodinných domů až po průmyslové haly.
      </p>
      <br />
      <h3>Možnosti ochrany před bleskem:</h3>

      <ol>
        <li>
          <h4>Klasický hromosvod</h4> (Franklinův, resp. Divišův) „pasivní“,
          který spolehlivě svede přímý úder blesku do zemnící soustavy tak, aby
          nedošlo k nebezpečným přeskokům na vodivé části objektu.
          <br />
          <a href="#order" id="klasicky" onClick={(e) => handleClick(e)}>
            Požádat o kalkulaci
          </a>
          <br />
        </li>
        <li>
          <h4>Aktivní hromosvod</h4>
          na technickém principu založený jímač, který vysíláním pulsů vytváří
          preferenční cestu pro „svedení“ případného blesku do zemnící soustavy
          tak, aby nedošlo k nebezpečným přeskokům na vodivé části objektu.
          <br />
          <a href="#order" id="aktivni" onClick={(e) => handleClick(e)}>
            Požádat o kalkulaci
          </a>
          <br />
        </li>
        <li>
          <h4>HVI hromosvod</h4>
          od německého výrobce Dehn, zajišťující maximální možnou ochranu před
          účinky blesku díky patentovanému obalu vodiče, který zabraňuje
          přeskoku elektrického výboje.
          <br />
          <a href="#order" id="hvi" onClick={(e) => handleClick(e)}>
            Požádat o kalkulaci
          </a>
          <br />
        </li>
      </ol>
      <p>
        Pro bezvadnou funkci každé hromosvodné soustavy je nutné provádět
        pravidelné revizní kontroly v intervalech od dvou do čtyřech let, podle
        typu a určení budovy. Následně provádíme odstranění zjištěných závad.
      </p>
    </div>
  );
};

export default Home;
