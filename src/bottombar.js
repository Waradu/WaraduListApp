import React from 'react'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as SVGyt } from "./projectsrc/yt.svg";
import { ReactComponent as SVGgh } from "./projectsrc/gh.svg"

export default function Bottombar() {

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 10000);
  }, []);

  return (
    <div className="bottombar">
        <div className="hover clock">
          <FontAwesomeIcon icon={faClock} className="ico" />
          <div className="hover clocktext">
            {dateState.toLocaleDateString("de-ch", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            {" - "}
            {dateState.toLocaleString("de-ch", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })}
          </div>
        </div>
        <div></div>
        <a
          href="https://www.youtube.com/channel/UCLBeNVGJGc07l9v9K6p1xCQ"
          target="_blank"
          rel="noreferrer"
          className="hover ytdiv svgbottombar"
        >
          <SVGyt className="yt svg" /> Youtube
        </a>
        <div className="divider"></div>
        <a
          href="https://github.com/Waradu"
          target="_blank"
          rel="noreferrer"
          className="hover ghdiv svgbottombar"
        >
          <SVGgh className="gh svg" /> Github
        </a>
      </div>
  )
}
