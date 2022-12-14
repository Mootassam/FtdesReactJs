import React from "react";

import { twitter, instagram, facebook, youtube } from "src/assets/images";
import { i18n } from "src/i18n";
import styled from "styled-components";

export default function LeftSection() {
  return (
    <LeftLayout>
      <h3>{i18n("ContactPage.titlep")}</h3>

      <h3 className="sectionTitle">{i18n("ContactPage.ParTelephone")}</h3>
      <p>{i18n("ContactPage.Jour")}</p>

      <h3 className="sectionTitle">{i18n("ContactPage.Email")}</h3>
      <p>
        {i18n("ContactPage.contactp")}
        <a href="mailto:contact@al-forum.org"> contact@al-forum.org</a>
      </p>

      <h3 className="sectionTitle">{i18n("ContactPage.ReseauxSociaux")}</h3>
      <div className="nav__socialmedia">
        <img className="lazyload" src={facebook} alt="FaceBook Icon" />
        <img className="lazyload" src={twitter} alt="Twitter ICon" />
        <img className="lazyload" src={youtube} alt="Youtube Icon" />
        <img className="lazyload" src={instagram} alt="Instagram Icon" />
      </div>
    </LeftLayout>
  );
}

const LeftLayout = styled.section`
  h3 {
    font-family: "Proxima Nova";
    text-transform: capitalize;
    color: var(--violet);
  }

  .sectionTitle {
    margin-top: 1rem;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    font-size: 1.2rem;
    color: #e1011a;
  }

  p {
    font-family: "Proxima Nova";
    line-height: 1.5;
    font-size: 1rem;
    color: #000;
  }
`;
