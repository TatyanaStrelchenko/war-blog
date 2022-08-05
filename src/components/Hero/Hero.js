import "./Hero.scss";
import { Link } from "react-scroll";

<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-NCRMZH938E"
></script>;

const Hero = () => {
  return (
    <section className="hero-sections">
      <div className="container">
        <div className="home-background">
          <div className="split">
            <div className="background-item-1"></div>
          </div>
          <div className="split">
            <div className="background-item-2"></div>
          </div>
          <div className="split">
            <div className="background-item-3"></div>
          </div>
          <div className="split">
            <div className="background-item-4"></div>
          </div>
        </div>
        <div className="text">
          <h1 className="history-war">ІСТОРІЇ ПРО ВІЙНУ</h1>
          <nav className="header-nav">
            <span className="bottom-hover active">Люди</span>
            <span className="nav-spacer"></span>
            <span className="bottom-hover">Історії</span>
            <span className="nav-spacer"></span>
            <span className="bottom-hover">Війна</span>
          </nav>
          <p>Історії людей, що втекли від війни</p>
        </div>
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
          className="arrow"
        >
          <svg x="0px" y="0px" viewBox="0 0 500 500">
            <path d="M111,187.4c-7.6,6.6-7.6,17.3,0,23.9l116.2,101.2c7.6,6.6,19.8,6.6,27.4,0l116.2-101.2 c3.8-3.3,5.7-7.6,5.7-11.9c0-4.3-1.9-8.6-5.7-11.9c-7.6-6.6-19.8-6.6-27.4,0l-102.5,89.3l-102.5-89.3 C130.8,180.9,118.6,180.9,111,187.4z"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
