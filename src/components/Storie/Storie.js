import "./Storie.scss";

const Storie = ({ image, text }) => {
  return (
    <div className="col">
      <div className="img-holder">
        <img src={image} alt="Img" />
      </div>
      <p className="post-text">{text}</p>
    </div>
  );
};

export default Storie;
