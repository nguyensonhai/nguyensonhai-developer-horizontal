import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/components.js";
import "assets/css/components/infoAreaStyle.css";
import "assets/css/effects/glitch.css";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import DarkModeToggle from "react-dark-mode-toggle";
import "assets/css/components/musicPlayerStyle.css";
const useStyles = makeStyles(styles);
var audio = new Audio(require("assets/audio/waiting-for-love.mp3"));
audio.loop = true;

export default function InfoArea() {
  const classes = useStyles();
  const history = useHistory();
  const [play, setPlay] = useState(false);
  const [controlPanel, setControlPanel] = useState("control-panel");
  const [infoBar, setInfoBar] = useState("info");
  const start = () => {
    if (play) {
      audio.pause();
      setControlPanel("control-panel");
      setInfoBar("info");
    } else {
      audio.play();
      setControlPanel("control-panel active");
      setInfoBar("info active");
    }
    setPlay(!play);
  };
  const themes = localStorage.getItem("themes") || "";
  const changeMode = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop < 50) {
      if (themes === "dark") localStorage.setItem("themes", "");
      else localStorage.setItem("themes", "dark");
      history.push("/");
    }
  };

  return (
    <div className="info-area-container">
      <div className="button-themes">
        <DarkModeToggle
          onChange={changeMode}
          checked={themes === "dark" ? true : false}
          size={window.innerWidth <= 768 ? 65 : 80}
        />
      </div>

      <div className={"button-player"}>
        <Image
          src={
            play
              ? require("assets/img/icons/playing.gif")
              : require("assets/img/icons/music.png")
          }
          roundedCircle
          fluid
          className={"button-play-image"}
          onClick={start}
        />
      </div>

      <div className="player-container">
        <div className="player">
          <div id="info" className={infoBar}>
            <span className="artist">Avicii</span>
            <span className="name">Waiting For Love</span>
            {/* <div className="progress-bar">
              <div className="bar"></div>
            </div> */}
          </div>
          <div id="control-panel" className={controlPanel}>
            <div className="album-art"></div>
            <div className="controls">
              {/* <div className="prev"></div> */}
              <div id="play" className="play" onClick={start}></div>
              {/* <div className="next"></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <div className="avatar-container">
              <div>
                <div className={"c-glitch__container"}>
                  <a
                    href="https://drive.google.com/file/d/11USPVdgkUFk9BIzzLp7oQZtpgHKeZrH6/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" c-glitch">
                      <div className="c-glitch__img"></div>
                      <div className="c-glitch__img"></div>
                      <div className="c-glitch__img"></div>
                      <div className="c-glitch__img"></div>
                      <div className="c-glitch__img"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className={"brand"}>
                  <h1 className="title">
                    Hi there{" "}
                    <span role="img" aria-labelledby="wave">
                      👋🏼
                    </span>
                    ,
                  </h1>
                  <h3 className="subtitle">
                    "Nice to meet you. I'm a Developer having interest in
                    Building Website & Mobile Application. I design and code
                    beautifully simple things, and I love what I do."
                  </h3>
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
