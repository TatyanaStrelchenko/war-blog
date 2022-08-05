import "./App.scss";
import Hero from "./components/Hero";
import Stories from "./components/Stories";
import CookieConsent from "react-cookie-consent";

<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-NCRMZH938E"
></script>;

const App = () => {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Hero />
        <Stories />
        <section className="footer">
          <div className="container">
            <div className="video-holder">
              <iframe
                width="100%"
                height="315px"
                src="https://www.youtube.com/embed/EEDFwUl08M8?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            {/* <p className="footer-text">Більше історій про Війну</p> 
                <div className="social-footer">             
                </div>  */}
            <p className="footer-text">
              Хочеш розповісти свою історію? Надсилай на пошту
            </p>
            <p onClick={() => (window.location = "strelchenko.t.v@gmail.com")}>
              strelchenko.t.v@gmail.com
            </p>
          </div>
        </section>
      </div>
      <CookieConsent
        location="bottom"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#000", padding: "0 20px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};

export default App;
