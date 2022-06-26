import './App.scss';
import Hero from "./components/Hero"
import Stories from './components/Stories';

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NCRMZH938E"></script>

const App =() => {

  return (
    <div className="App">
      <div className="main-wrapper"> 
        <Hero />  
        <Stories />
        <section className="footer">
          <div className="container">
            <div className="video-holder">              
              <iframe width="100%" height="315px" src="https://www.youtube.com/embed/EEDFwUl08M8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
              {/* <p className="footer-text">Більше історій про Війну</p> 
                <div className="social-footer">             
                </div>  */}
            <p className="footer-text">Хочеш розповісти свою історію?
              Надсилай на пошту</p>
            <p>strelchenko.t.v@gmail.com</p>
          </div> 
        </section>
      </div> 
    </div>
  );
}

export default App;
