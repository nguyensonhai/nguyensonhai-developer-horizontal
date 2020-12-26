import React from "react";
import SliderEzHealth from "components/Slider/SliderEzHealth.js";
import SliderEzKidel from "components/Slider/SliderEzKidel.js";
import SliderEzExplore from "components/Slider/SliderEzExplore.js";
import VideoPlayer from "components/VideoPlayer/VideoPlayer.js";
import CarouselExplore from "components/Carousel/CarouselExplore.js";
import "assets/css/components/projectsStyle.css";
import "assets/css/effects/hover-features.css";
import "assets/css/effects/diamond-shape-grid.css";

export default function Projects() {
  const themes = localStorage.getItem("themes") || "";
  const textColor = themes === "dark" ? "white" : "#121212";
  const backgroundButton = {
    backgroundColor: themes === "dark" ? "#ffffff" : "#121212",
  };
  const colorButton = {
    color: themes === "dark" ? "#121212" : "#ffffff",
    textDecoration: "none",
  };
  return (
    <div id="myprojects">
      <div className="wrapper-container">
        <div className="span-container yellow">
          <span
            style={{ color: textColor }}
            className={themes === "dark" ? "cta-dark" : "cta yellow-cta"}
          >
            <span style={{ color: textColor }} className="spandark">
              My startup projects
            </span>
          </span>
        </div>
        {/* Ez Health */}
        <div className="project-container">
          <div className="project-info">
            <img
              src={require("assets/img/apps/ezhealth/ezhealth.png")}
              className="project-logo"
              alt="project-logo"
            />
            <span style={{ color: textColor }} className="project-name">
              Ez Health: Health & Fitness Solutions
            </span>
            <span style={{ color: textColor }} className="project-decr">
              Healthy is something that is on everyone’s mind at some point. We
              put a bit of a focus on eating, fitness and plan your healthy life
              cycle with this one. We have more colorful style features for you.
            </span>
          </div>
          <div className={"features-body"}>
            {/* Food Choices */}
            <div className="features-container">
              <div className="featuresImage foodsImg"></div>
              <div className="featuresName">Food Choices</div>
            </div>
            {/* Rest */}
            <div className="features-container">
              <div className="featuresImage restImg"></div>
              <div className="featuresName">Rest</div>
            </div>
            {/* Fitness */}
            <div className="features-container">
              <div className="featuresImage fitnessImg"></div>
              <div className="featuresName">Fitness</div>
            </div>
            {/* Challenges */}
            <div className="features-container">
              <div className="featuresImage challengesImg"></div>
              <div className="featuresName">Challenges</div>
            </div>
            {/* Meditation */}
            <div className="features-container">
              <div className="featuresImage meditationImg"></div>
              <div className="featuresName">Meditation</div>
            </div>
            {/* Sleepy Sounds */}
            <div className="features-container">
              <div className="featuresImage sleepyImg"></div>
              <div className="featuresName">Sleepy Sounds</div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-container nsh-col">
        <SliderEzHealth />
        <div className="projects-km" id="f-km-web" style={backgroundButton}>
          <a
            href="https://github.com/ezratech/ezhealth"
            className="projects-km-text"
            target="_blank"
            rel="noopener noreferrer"
            style={colorButton}
          >
            Know more
          </a>
        </div>
      </div>
      <div className="wrapper-container j-l-c">
        <VideoPlayer
          src={require("assets/videos/ezhealth.mp4")}
          bgColor={"#010101"}
        />
      </div>
      {/* Ez Kidel */}
      <div className={"line-projects"}></div>
      <div className="wrapper-container j-l-c">
        <div className="project-container">
          <div className="project-info">
            <img
              src={require("assets/img/apps/ezkidel/ezkidel.png")}
              className="project-logo"
              alt="project-logo"
            />
            <span style={{ color: textColor }} className="project-name">
              Ez Kidel: Learn English Vocabulary
            </span>
            <span style={{ color: textColor }} className="project-decr">
              Useful application you to improve English vocabulary, listening
              and reading abilities. You can learn English with hundreds of
              vocabulary with images and pronunciation. It's very easy to use
              with simple, intuitive and powerful interface.
            </span>
          </div>
          <div className={"kidel-feature-container"}>
            <ul className="kidel-fearture-nav">
              <li className="item1 bubble">
                <div className="bg"></div>
              </li>
              <li className="item2 bubble">
                <div className="bg"></div>
              </li>
              <li className="item3 bubble">
                <div className="bg"></div>
              </li>
              <li className="item4 bubble">
                <div className="bg"></div>
              </li>
              <li className="item5 bubble">
                <div className="bg"></div>
              </li>
              <li className="item6 bubble">
                <div className="bg"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrapper-container nsh-col">
        <SliderEzKidel />
        <div
          className="projects-km-kidel"
          id="s-km-web"
          style={backgroundButton}
        >
          <a
            href="https://github.com/ezratech/ezkidel"
            className="projects-km-text"
            target="_blank"
            rel="noopener noreferrer"
            style={colorButton}
          >
            Know more
          </a>
        </div>
      </div>
      <div className="wrapper-container j-l-c">
        <VideoPlayer
          src={require("assets/videos/ezkidel.mp4")}
          bgColor={"#20212A"}
        />
      </div>
      {/* Ez Explore */}
      <div className={"line-projects"}></div>
      <div className="wrapper-container j-l-c">
        <div className="project-container">
          <div className="project-info">
            <img
              src={require("assets/img/apps/ezexplore/ufo.png")}
              className="project-logo"
              alt="project-logo"
            />
            <span style={{ color: textColor }} className="project-name">
              Ez Explore: Discover Everything
            </span>
            <span style={{ color: textColor }} className="project-decr">
              Explore and discover interesting things around the world with
              beautiful images along with detailed content descriptions.
            </span>
            <div
              className="projects-km-explore"
              id="r-km-web"
              style={backgroundButton}
            >
              <a
                href="https://ezexplore.web.app"
                className="projects-km-text"
                target="_blank"
                rel="noopener noreferrer"
                style={colorButton}
              >
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-container j-l-c">
        <SliderEzExplore />
      </div>
    </div>
  );
}
