import React from "react";
import Footer from "components/Footer/Footer.js";
import SectionDownload from "views/Components/Sections/SectionDownload.js";
import "assets/css/components/bottomStyle.css";
import macos from "assets/img/stocks/macos-bg-flip.jpg";
import dark from "assets/img/stocks/background_dark_bottom.jpg";

export default function Bottom() {
  const themes = localStorage.getItem("themes") || "";
  return (
    <div
      className={"bottom-container"}
      style={{
        backgroundImage: themes === "dark" ? `url(${dark})` : `url(${macos})`,
      }}
    >
      <SectionDownload />
      <Footer />
    </div>
  );
}
