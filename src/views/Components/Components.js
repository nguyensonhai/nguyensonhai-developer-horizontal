import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Hobbies from "components/Hobbies/Hobbies.js";
import ThingsIDo from "components/ThingsIDo/ThingsIDo.js";
import Projects from "components/Projects/Projects.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Bottom from "components/Bottom/Bottom.js";
import Tracks from "components/Tracks/Tracks.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import "assets/css/effects/index.css";
import "assets/css/effects/span-hover.css";
import "assets/css/effects/font.css";
import "assets/css/effects/scrollbar.css";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const themes = localStorage.getItem("themes") || "";

  return (
    <div className={"main"}>
      <Header
        brand="Nguyễn Sơn Hải"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: themes === "dark" ? "dark" : "white",
        }}
        {...rest}
      />
      <Parallax
        image={
          themes === "dark"
            ? require("assets/img/stocks/background_dark.jpg")
            : require("assets/img/stocks/macos-bg.jpg")
        }
      >
        <InfoArea />
      </Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{
          backgroundColor: themes === "dark" ? "#363940" : "white",
          transition: "all 0.6s ease",
        }}
      >
        <div className="wrapper-container ">
          <Hobbies />
          <ThingsIDo />
        </div>
        <Projects />
        <Tracks />
      </div>
      <Bottom />
      {/* <SectionCarousel /> */}
    </div>
  );
}
