import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div
      className="relative flex flex-wrap justify-center bg-avion-blue text-white"
      style={{ marginTop: "30px", paddingTop: "30px" }}
    >
      <div className="w-1/3">
        <h1 className="font-Koulen text-4xl">QUICK LINKS</h1>
        <div className="flex flex-col">
          <a
            href="#"
            className="text-1xl mb-2 font-Gupter text-opacity-70"
            style={{
              textDecoration: "underline",
              transition: "text-decoration 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "none")}
            onMouseOut={(e) => (e.target.style.textDecoration = "underline")}
          >
            Arrivals
          </a>
          <a
            href="#"
            className="text-1xl mb-2 font-Gupter text-opacity-70"
            style={{
              textDecoration: "underline",
              transition: "text-decoration 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "none")}
            onMouseOut={(e) => (e.target.style.textDecoration = "underline")}
          >
            Departures
          </a>
          <a
            href="#"
            className="text-1xl mb-2 font-Gupter text-opacity-70"
            style={{
              textDecoration: "underline",
              transition: "text-decoration 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "none")}
            onMouseOut={(e) => (e.target.style.textDecoration = "underline")}
          >
            Delays
          </a>
          <a
            href="#"
            className="text-1xl mb-2 font-Gupter text-opacity-70"
            style={{
              textDecoration: "underline",
              transition: "text-decoration 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "none")}
            onMouseOut={(e) => (e.target.style.textDecoration = "underline")}
          >
            Help
          </a>
        </div>
      </div>

      <div className="w-1/3 text-right">
        <h1 className="font-Koulen text-4xl">CONTACT</h1>
        <h2 className="text-1xl font-Gupter text-opacity-70">Flight Hub</h2>
        <p className="text-1xl font-Gupter text-opacity-70">
          Airport Terminal Building
          <br />
          100 World Parkway
          <br />
          California
          <br />
          <br />
          Cell: 123-123-1234
          <br />
          Toll Free: 866-123-1234
          <br />
          Fax: 123-123-1234
          <br />
          Email: info@flighthub.com
        </p>
      </div>

      <div
        className="mt-4 flex w-full justify-center"
        style={{ marginBottom: "20px" }}
      >
        <SocialIcon url="https://twitter.com" className="mx-2" />
        <SocialIcon url="https://facebook.com" className="mx-2" />
        <SocialIcon url="https://youtube.com" className="mx-2" />
      </div>
    </div>
  );
};

export default Footer;
