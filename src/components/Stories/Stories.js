import Masonry from "react-masonry-css";
import Storie from "../Storie";
import { data } from "../../store-data";
import "./Stories.scss";

<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-NCRMZH938E"
></script>;

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  500: 1,
};

const Stories = () => {
  return (
    <section className="info-sections" id="section1">
      <div className="container">
        <div className="container-header">
          <h1 className="post-container-header">
            Історії Харківських переселенців
          </h1>
          <h2 className="post-container-subheader">ОСТАННІ ІСТОРІЇ</h2>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((item, i) => (
            <Storie image={item.img} text={item.text} stringsCount={item.stringsCount} key={i} i={i}/>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Stories;
