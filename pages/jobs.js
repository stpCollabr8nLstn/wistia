import React from "react";
import BeYourself from "../components/content/be-yourself";
import Join from "../components/content/join";
import IconInfo from "../components/content/icon-info";
import PushingOurselves from "../components/content/pushing-ourselves";
// import Diversity from "../components/content/diversity";
// import Fun from "../components/content/fun";
// import Perks from "../components/content/perks";
// import { PerksProvider } from "../context/PerksContext";
// import Openings from "../components/content/openings";

function Jobs() {
  React.useEffect(() => {
    document.title = "Wistia Jobs!";
  });
  return (
    <div>
      <Join />
      <BeYourself />
      <IconInfo />
      <PushingOurselves />
    </div>
  );
}

export default Jobs;