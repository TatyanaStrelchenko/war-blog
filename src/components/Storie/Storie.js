import React, { useState } from "react";
import { randomItem } from "../../helpers";
import "./Storie.scss";

const Storie = ({ image, text, i }) => {
  const [fullText, setFullText] = useState(false);

  const items = [1, 2, 3, 4];
  const numb = randomItem(items);

  const postTextClass = fullText
    ? "post-text"
    : `post-text post-text__short-${numb}`;
    
  const buttonText = fullText ? "Свернуть" : "Развернуть";

  const handleClick = (id) => {
    setFullText(!fullText);
    if (fullText) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="col" id={i}>
      <div className="img-holder">
        <img src={image} alt="Img" />
      </div>
      <p className={postTextClass}>{text}</p>
      <div className="storie-action">
        <button onClick={() => handleClick(i)}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Storie;
