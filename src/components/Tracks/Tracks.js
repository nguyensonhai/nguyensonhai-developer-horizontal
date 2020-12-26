import React from "react";
import "assets/css/components/tracksStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Tracks() {
  const themes = localStorage.getItem("themes") || "";
  const textColor = themes === "dark" ? "white" : "#121212";
  return (
    <div className="wrapper-container">
      <div id="myfavoritetracks">
        <div className="span-container spotify">
          <span
            style={{ color: textColor }}
            className={themes === "dark" ? "cta-dark" : "cta spotify-cta"}
          >
            <span style={{ color: textColor }} className="spandark">
              My favorite tracks
            </span>
          </span>
        </div>
        <div className="embed-spotify-container">
          <div className="row">
            {/* Forever Yours*/}
            <div className="col-sm-4">
              <div className="embed-spotify">
                <div className="embed-spotify-body">
                  <iframe
                    src="https://open.spotify.com/embed/track/3o1CUVeHIid49sabk6A6Nf"
                    className="iframe-spofity"
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media"
                    title={"forever-yours"}
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Beautiful */}
            <div className="col-sm-4">
              <div className="embed-spotify">
                <div className="embed-spotify-body">
                  <iframe
                    src="https://open.spotify.com/embed/track/745bEQatiiXDtBe1AdQY2P"
                    className="iframe-spofity"
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media"
                    title={"beautiful"}
                  ></iframe>
                </div>
              </div>
            </div>
            {/* The Truth */}
            <div className="col-sm-4">
              <div className="embed-spotify">
                <div className="embed-spotify-body">
                  <iframe
                    src="https://open.spotify.com/embed/track/4NmOJQxl9UZItUQQtMDYBb"
                    className="iframe-spofity"
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media"
                    title={"the-truth"}
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Without You */}
            <div className="col-sm-4">
              <div className="embed-spotify">
                <div className="embed-spotify-body">
                  <iframe
                    src="https://open.spotify.com/embed/track/6Pgkp4qUoTmJIPn7ReaGxL"
                    className="iframe-spofity"
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media"
                    title={"the-truth"}
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Happy Now */}
            <div className="col-sm-4">
              <div className="embed-spotify">
                <div className="embed-spotify-body">
                  <iframe
                    src="https://open.spotify.com/embed/track/14sOS5L36385FJ3OL8hew4"
                    className="iframe-spofity"
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media"
                    title={"the-truth"}
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Enemy */}
            <div className="col-sm-4">
              <div className="embed-spotify">
                <div className="embed-spotify-body">
                  <iframe
                    src="https://open.spotify.com/embed/track/7qzfQO3LQdh5XonLYP2MQ9"
                    className="iframe-spofity"
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media"
                    title={"the-truth"}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
