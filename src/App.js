import './App.scss';
import Hero from "./components/Hero"
import Stories from './components/Stories';

const App =() => {

  return (
    <div className="App">
      <div className="main-wrapper"> 
        <Hero />  
        <Stories />
        <section className="footer">
          <div className="container">
           <iframe width="100%" height="500px" src="https://www.youtube.com/embed/EEDFwUl08M8" title="YouTube video player"></iframe>
              {/* <p className="footer-text">Більше історій про Війну</p> 
                <div className="social-footer">             
                </div>  */}
          </div> 
        </section>
      </div> 
    </div>
  );
}

export default App;
