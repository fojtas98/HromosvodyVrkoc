import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.TWILIO);

export default {
  Query: {
    handleEmails: async (parent, { EmailData }) => {
      const msg = {
        to: EmailData.email,
        from: "fojtik.jan98@gmail.com",
        subject: "Formulář z Hromosvodyvrkoc.cz",
        html: `<div>
        ${
          EmailData.hromosvod
            ? `<u>Hromosvod:</u> ${EmailData.hromosvod} <br />`
            : ` <span></span>`
        }
        ${
          EmailData.obvodBudovy
            ? `<u>obvod budovy:</u> ${EmailData.obvodBudovy} <br />`
            : ` <span></span>`
        }

        ${
          EmailData.vyskaBudovy
            ? `<u>Výška budovy:</u> ${EmailData.vyskaBudovy}  <br />`
            : `<span></span>`
        }
        ${
          EmailData.vyskaBudovyKOkapu
            ? `<u>Výška budovy k okapu:</u> ${EmailData.vyskaBudovyKOkapu} <br />`
            : `<span></span>`
        }
        ${
          EmailData.delkaHrebenu
            ? `<u>Délka hřebenu:</u> ${EmailData.delkaHrebenu} <br />`
            : `<span></span>`
        }
        ${
          EmailData.typStresniKrytiny
            ? ` <u>Typ střešní krytiny:</u> ${EmailData.typStresniKrytiny} <br />`
            : `<span></span>`
        }
        ${
          EmailData.antena !== undefined
            ? `<u>Anténa:</u> ${EmailData.antena ? "ano" : "ne"} <br />`
            : `<span></span>`
        }
        ${
          EmailData.zemneni !== undefined
            ? `<u>Zemnění:</u> ${EmailData.zemneni ? "ano" : "ne"} <br />`
            : `<span></span>`
        }
        ${
          EmailData.jmeno
            ? `<u>Jméno:</u> ${EmailData.jmeno} <br />`
            : `<span></span>`
        }
        ${
          EmailData.mesto
            ? `<u>Mesto:</u> ${EmailData.mesto}  <br />`
            : `<span></span>`
        }
        ${
          EmailData.ulice
            ? `<u>Ulice:</u> ${EmailData.ulice}  <br />`
            : `<span></span>`
        }
        ${
          EmailData.tel
            ? `<u>Telefon:</u> ${EmailData.tel} <br />`
            : `<span></span>`
        }
        ${
          EmailData.email
            ? `<u>E-mail:</u> ${EmailData.email} <br />`
            : `<span></span>`
        }
        ${
          EmailData.poznamky
            ? `<u>poznámky:</u> ${EmailData.poznamky}`
            : `<span></span>`
        }
        </div>
        `,
      };
      return sgMail
        .send(msg)
        .then(() => {
          return true;
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
    },
  },
};
