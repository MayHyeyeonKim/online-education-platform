// AboutPage.js
import React from "react";
import Album from "../forms/Album"; // Correct import path

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Album /> {/* Renders the Album component */}
      {/* <img src="/images/sh1.png" alt="sh1" /> */}
      {/* 내용 추가 */}
    </div>
  );
};

export default AboutPage;
