import './App.css';

function App() {
  return (
    <div className="App">
      <div class="main-wrapper">       
        <section class="hero-sections">
          <div class="container">            
            <div class="page-border border-top"></div>
            <div class="page-border border-left"></div>
            <div class="page-border border-right"></div>
            <div class="page-border border-bottom"></div>            
            <div class="home-header">
              <div class="home-background">                                          
                <div class="split">
                  <div class="background-item-1"></div>
                </div>                
                <div class="split">
                  <div class="background-item-2"></div>
                </div>
                <div class="split">
                  <div class="background-item-3"></div>
                </div>
                <div class="split">
                  <div class="background-item-4"></div>
                </div>
                <h1>ИСТОРИИ О ВОЙНЕ</h1>
                  <nav class="header-nav">
                    <a href="/" class="stories-header active">Stories<span></span></a>
                      <span class="nav-spacer"></span>
                    <a class="countries-header" href="/countries">Countries<span></span></a>
                      <span class="nav-spacer"></span>
                    <a class="series-header" href="/series">Series<span></span></a>
                  </nav>             
              </div>  
            </div>     
          </div>
        </section>
        <section class="info-sections">
          <div class="container-header">
            <h1 class="post-container-header">HUMANS OF NEW YORK</h1>
            <h2 class="post-container-subheader">LATEST STORIES</h2>
          </div>
            <div class="post image-loaded">
              <div class="post-image"></div>
                <div class="post-text">
                  <p>(11/12) “My daughter Emily was born on February 2nd, 2013. Then three weeks later I started at Stonybrook. None of it was easy. 
                    Nicollete and I struggled. She had postpartum, and I had no idea how to be a father. I slipped so many times. I self-sabotaged. 
                    But DiCo has got this parenting instinct. Whenever he didn’t hear from me for awhile, that’s when he’d show up. He’d send me money, 
                    or even just a card to say he was thinking about me. I got my GPA up to a 3.5. I ended up becoming the R.A. of my dorm. And during my junior 
                    year Stonybrook decided to highlight my story in a fundraising campaign. They put my picture up on billboards, and busses. They flew in some 
                    producers from California, and filmed a video. They made me seem so great, but self-made is bullshit. Not when you grow up like me. There were 
                    so many people who helped me. It wasn’t just DiCo. But if DiCo doesn’t come, I never get to those other people. DiCo is number one. And not just for me, 
                    either. Our whole team is doing big things. Marvin’s at Columbia law school. Armani is an actor. Jasly went to Harvard. Ksewa is a screenwriter in Los Angeles. 
                    Rollins is a director for charter schools in Connecticut. Maybe some of that happens without DiCo. But not for me. If it wasn’t for DiCo I’d have been in that cell with Koreh. 
                    I’m a respiratory therapist now, and my very first year I was making more money than DiCo. It got me thinking: ‘How did DiCo do it?’ A few years ago I asked him: ‘How could you 
                    afford to help us so much, working as a public school teacher?’ ‘I couldn’t,’ he said. ‘But I saw all of you as an investment. And I thought if I poured enough into you, you would 
                    help me give back to the world.’ A few years ago DiCo started something called the Brooklyn Debate League. He’s trying to start debate programs in urban areas: find coaches, provide resources, 
                    subsidize tournaments. At first I was just the biggest donor. But now I’m a board member, and I’m right there with him: visiting schools, giving speeches. I bet DiCo never could have imagined it. 
                    Back when I was a crazy ninth grader, jumping on tables. I bet DiCo never thought in a million years that one day we’d be coaching together.”
                  </p>
              </div>
              <span class="backfill"></span>
            </div>         
        </section>
      </div> 
    </div>
  );
}

export default App;
