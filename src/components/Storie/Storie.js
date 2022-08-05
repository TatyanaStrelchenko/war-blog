import React, { useState, useRef } from "react";
import "./Storie.scss";

const Storie = ({ image, text, stringsCount, i }) => {
  const [fullText, setFullText] = useState(false);
  const storieRef = useRef();

  const postTextClass = fullText
    ? "post-text"
    : `post-text post-text__short post-text__short-${stringsCount}`;

  const buttonText = fullText ? "Згорнути" : "Розгорнути";

  const handleClick = () => {
    setFullText(!fullText);
    if (fullText) {
      storieRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="col" id={i} ref={storieRef}>
      <div className="img-holder">
        <img src={image} alt="Img" />
      </div>
      <p className={postTextClass}>{text}</p>
      <div className="storie-action">
        <button onClick={() => handleClick()}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Storie;
