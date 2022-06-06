import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">       
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
              <h1 className="history-war">ИСТОРИИ О ВОЙНЕ</h1>               
              <nav className="header-nav">
                  <a href="#" className="stories-header active">Stories<span></span></a>
                    <span className="nav-spacer"></span>
                  <a className="countries-header" href="/countries">Countries<span></span></a>
                    <span className="nav-spacer"></span>
                  <a className="series-header" href="#">Series<span></span></a>
                </nav>                   
                </div>
          </section>
          <section className="info-sections">        
            <div className="container">   
              <div className="container-header"> 
                <h1 className="post-container-header">HUMANS OF NEW YORK</h1>
                <h2 className="post-container-subheader">LATEST STORIES</h2>    
              </div> 
              <div className="row">
                <div className="col-sm-6">
                  <a href="#" class="hover-transform-block">
								<div class="transform-block">
									<div class="img-holder">
									  <div className="post info-1"></div>  
									</div>                   
								</div>													
								  <p>(11/12) “My daughter Emily was born on February 2nd, 2013. Then three weeks later I started at Stonybrook. None of it was easy. Nicollete and I struggled. She had postpartum, and I had no idea how to be a father. I slipped so many times. I self-sabotaged. But DiCo has got this parenting instinct. Whenever he didn’t hear from me for awhile, that’s when he’d show up. He’d send me money, or even just a card to say he was thinking about me. I got my GPA up to a 3.5. I ended up becoming the R.A. of my dorm. And during my junior year Stonybrook decided to highlight my story in a fundraising campaign. They put my picture up on billboards, and busses. They flew in some producers from California, and filmed a video. They made me seem so great, but self-made is bullshit. Not when you grow up like me. There were so many people who helped me. It wasn’t just DiCo. But if DiCo doesn’t come, I never get to those other people. DiCo is number one. And not just for me, either. Our whole team is doing big things. Marvin’s at Columbia law school. Armani is an actor. Jasly went to Harvard. Ksewa is a screenwriter in Los Angeles. Rollins is a director for charter schools in Connecticut. Maybe some of that happens without DiCo. But not for me. If it wasn’t for DiCo I’d have been in that cell with Koreh. I’m a respiratory therapist now, and my very first year I was making more money than DiCo. It got me thinking: ‘How did DiCo do it?’ A few years ago I asked him: ‘How could you afford to help us so much, working as a public school teacher?’ ‘I couldn’t,’ he said. ‘But I saw all of you as an investment. And I thought if I poured enough into you, you would help me give back to the world.’ A few years ago DiCo started something called the Brooklyn Debate League. He’s trying to start debate programs in urban areas: find coaches, provide resources, subsidize tournaments. At first I was just the biggest donor. But now I’m a board member, and I’m right there with him: visiting schools, giving speeches. I bet DiCo never could have imagined it. Back when I was a crazy ninth grader, jumping on tables. 
                  I bet DiCo never thought in a million years that one day we’d be coaching together.”</p>
							</a>
            </div>
            <div className="col-sm-6">
              <a href="#" class="hover-transform-block">
								<div class="transform-block">
									<div class="img-holder">
									  <div className="post info-2"></div>  
									</div>                   
								</div>														
								<p>(11/12) “My daughter Emily was born on February 2nd, 2013. Then three weeks later I started at Stonybrook. None of it was easy. Nicollete and I struggled. She had postpartum, and I had no idea how to be a father. I slipped so many times. I self-sabotaged. But DiCo has got this parenting instinct. Whenever he didn’t hear from me for awhile, that’s when he’d show up. He’d send me money, or even just a card to say he was thinking about me. I got my GPA up to a 3.5. I ended up becoming the R.A. of my dorm. And during my junior year Stonybrook decided to highlight my story in a fundraising campaign. They put my picture up on billboards, and busses. They flew in some producers from California, and filmed a video. They made me seem so great, but self-made is bullshit. Not when you grow up like me. There were so many people who helped me. It wasn’t just DiCo. But if DiCo doesn’t come, I never get to those other people. DiCo is number one. And not just for me, either. Our whole team is doing big things. Marvin’s at Columbia law school. Armani is an actor. Jasly went to Harvard. Ksewa is a screenwriter in Los Angeles. Rollins is a director for charter schools in Connecticut. Maybe some of that happens without DiCo. But not for me. If it wasn’t for DiCo I’d have been in that cell with Koreh. I’m a respiratory therapist now, and my very first year I was making more money than DiCo. It got me thinking: ‘How did DiCo do it?’ A few years ago I asked him: ‘How could you afford to help us so much, working as a public school teacher?’ ‘I couldn’t,’ he said. ‘But I saw all of you as an investment. And I thought if I poured enough into you, you would help me give back to the world.’ A few years ago DiCo started something called the Brooklyn Debate League. He’s trying to start debate programs in urban areas: find coaches, provide resources, subsidize tournaments. At first I was just the biggest donor. But now I’m a board member, and I’m right there with him: visiting schools, giving speeches. I bet DiCo never could have imagined it. Back when I was a crazy ninth grader, jumping on tables. 
                 I bet DiCo never thought in a million years that one day we’d be coaching together.”</p>
								            
							</a>
            </div>
          </div>                 
              {/* <div className="info-image">     
                <div className="post-image">              
                  <div className="post info-1"></div>                 
                  <div className="post info-2"></div>                
                </div> 
                <div className="block-text">
                  <p>(12/12) “Sometimes after work DiCo will be like: ‘You wanna get a drink together?’ And that still feels weird, even though I’m 27. Because part of me will always see him as my superior. DiCo laughs at me. He says: ‘C’mon, you’re doing better than me now.’ But part of me is always gonna be a kid around DiCo. Last week we went to a vegan restaurant together. The only time I eat vegan is when I’m with DiCo. We got a couple drinks. And DiCo started telling me all these things that he’d never told me. He told me that his sister had been very sick while he was coaching our team. ‘I was visiting the hospital every day,’ he said. ‘Didn’t you wonder why I kept leaving practice early?’ I felt so bad. Because the truth is I didn’t wonder. I never sat down and wondered what it was like to be DiCo. For the first time in my life I’d found somebody that would take on my trauma, and my pain. Because DiCo was all I had. But you know what? We were all he had too. He was with us until 8:30 every night, and not once did I ask DiCo: ‘How are you doing?’, ‘How was your day?’ He was dealing with the transition, and his sister, and all this other stuff. But I only cared about me, me, me. For so many years I’d been mad at DiCo. Even when I wasn’t mad anymore, I was still sour. I kept asking myself, what if he hadn’t left?  Stonybrook is great. But maybe I could have gone to Harvard like Ksewa. Or Yale, like Jasly. I put all of that on DiCo. Because that’s what hurt people do. It was easier for me to focus on DiCo leaving, instead of what he did for me during those two years of my life. Toward the end of our dinner I was crying so hard that people were bringing me water. Then DiCo hit me with one last thing. He said that as soon as he got hired by the new school, he’d gone to the principal and asked them to hold a spot for me. He called my mom. He told her: ‘Let Jonathan come with me.’ For weeks DiCo kept calling her, saying: ‘Please, it’s a great opportunity.’ But my mom never followed through. She wouldn’t fill out the papers. Because she was on drugs. ‘I didn’t want to tell you,’ DiCo said. ‘Because I never wanted you to blame your mom. But I did try. I tried to take you with me.’”
                    Thank you to Jonathan Conyers for sharing his story. DiCo and Jon are building the Brooklyn Debate League to provide equal access to Speech and Debate programs for all students, regardless of income. They do programming every Monday and some of the tournaments have had over 80 students. They are running BDL on a shoestring, however. Thankfully they have a devoted network of alumni coaches, but DiCo has already spent $6,000 of his own savings on it. (Of course.) Please consider donating: https://bit.ly/bkdebateleague</p>  
                  <p>(12/12) “Sometimes after work DiCo will be like: ‘You wanna get a drink together?’ And that still feels weird, even though I’m 27. Because part of me will always see him as my superior. DiCo laughs at me. He says: ‘C’mon, you’re doing better than me now.’ But part of me is always gonna be a kid around DiCo. Last week we went to a vegan restaurant together. The only time I eat vegan is when I’m with DiCo. We got a couple drinks. And DiCo started telling me all these things that he’d never told me. He told me that his sister had been very sick while he was coaching our team. ‘I was visiting the hospital every day,’ he said. ‘Didn’t you wonder why I kept leaving practice early?’ I felt so bad. Because the truth is I didn’t wonder. I never sat down and wondered what it was like to be DiCo. For the first time in my life I’d found somebody that would take on my trauma, and my pain. Because DiCo was all I had. But you know what? We were all he had too. He was with us until 8:30 every night, and not once did I ask DiCo: ‘How are you doing?’, ‘How was your day?’ He was dealing with the transition, and his sister, and all this other stuff. But I only cared about me, me, me. For so many years I’d been mad at DiCo. Even when I wasn’t mad anymore, I was still sour. I kept asking myself, what if he hadn’t left?  Stonybrook is great. But maybe I could have gone to Harvard like Ksewa. Or Yale, like Jasly. I put all of that on DiCo. Because that’s what hurt people do. It was easier for me to focus on DiCo leaving, instead of what he did for me during those two years of my life. Toward the end of our dinner I was crying so hard that people were bringing me water. Then DiCo hit me with one last thing. He said that as soon as he got hired by the new school, he’d gone to the principal and asked them to hold a spot for me. He called my mom. He told her: ‘Let Jonathan come with me.’ For weeks DiCo kept calling her, saying: ‘Please, it’s a great opportunity.’ But my mom never followed through. She wouldn’t fill out the papers. Because she was on drugs. ‘I didn’t want to tell you,’ DiCo said. ‘Because I never wanted you to blame your mom. But I did try. I tried to take you with me.’”
                    Thank you to Jonathan Conyers for sharing his story. DiCo and Jon are building the Brooklyn Debate League to provide equal access to Speech and Debate programs for all students, regardless of income. They do programming every Monday and some of the tournaments have had over 80 students. They are running BDL on a shoestring, however. Thankfully they have a devoted network of alumni coaches, but DiCo has already spent $6,000 of his own savings on it. (Of course.) Please consider donating: https://bit.ly/bkdebateleague</p>             
                </div>
              </div>               */}
            </div>       
        </section>
      </div> 
    </div>
  );
}

export default App;
