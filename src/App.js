import { Fragment } from "react";
import AppGlobalStyle from "./AppStyle";
import { NavbarSection } from "./navbar/NavbarSection"
import { HomeSection } from "./home/HomeSection";
import { ParticleWavesBackground } from "./waves/ParticleWavesBackground";

function App() {
  return (
    <Fragment>
      <AppGlobalStyle/>
      <NavbarSection/>
      <HomeSection/>
      <ParticleWavesBackground/>
    </Fragment>
  );
}

export default App;
