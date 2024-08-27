import React from "react";
import Navbar from "./component/Navbar";
import LandingPageCenter from "./component/LandingPageCenter";
import Feature from "./component/Feature";
// import i18n from "./i18n";
import AiLawyer from "./component/AiLawyer";
import AiLawyerBetter from "./component/AiLawyerBetter";
import AiLearn from "./component/AiLearn";
import AiLawyerNews from "./component/AiLawyerNews";
import LegalServices from "./component/LegalServices";

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPageCenter />
      <Feature />
      <AiLawyer />
      <AiLawyerBetter />
      <AiLearn />
      <AiLawyerNews />
      <LegalServices />
    </div>
  );
};

export default App;
