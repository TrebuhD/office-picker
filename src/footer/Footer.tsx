import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer__wrapper">
        <p className="app-footer__par app-footer__par--main">
          Made with ♥ by{" "}
          <strong>
            <a
              href="http://github.com/TrebuhD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubert Dworczynski
            </a>
          </strong>
        </p>
        <p className="app-footer__par">
          Weather data obtained using the{" "}
          <a
            href="https://openweathermap.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Weather Map API
          </a>
        </p>
        <p className="app-footer__par">
          Flight price data via{" "}
          <a
            target="_blank"
            href="https://docs.kiwi.com/"
            rel="noopener noreferrer"
          >
            the Kiwi App
          </a>
        </p>
        <p className="app-footer__par">
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            title="Freepik"
            rel="noopener noreferrer"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            title="Flaticon"
            rel="noopener noreferrer"
          >
            www.flaticon.com
          </a>
        </p>
        <p className="app-footer__par">
          Photos via{" "}
          <a
            href="https://www.pexels.com/"
            target="_blank"
            title="Freepik"
            rel="noopener noreferrer"
          >
            Pexels
          </a>
        </p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
