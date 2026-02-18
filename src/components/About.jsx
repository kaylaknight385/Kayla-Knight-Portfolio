import bunnykayImg from '../assets/images/bunnykay.jpg';
import lipglossImg from '../assets/images/lipgloss.gif';
import tumblrBorder from '../assets/images/tumblr_74db12128477250759f0f1309b04fce4_00027172_1280.png';

function About() {
  return (
    <div className="aboutPage">
      <div className="about-container">
        <div className="images-scrapbook">
          <div id="comingSoon" className="scrapbook-image-1">
            <img src={bunnykayImg} alt="Background" className="bunny-background" />
            <img src={tumblrBorder} alt="Frame" className="tumblr-frame" />
          </div>

          <div id="comingSoon" className="scrapbook-image-2">
            <img src={lipglossImg} alt="Lipgloss" className="bunny-background" />
            <img src={tumblrBorder} alt="Frame" className="tumblr-frame" />
          </div>
        </div>
        
        <div className="about-content">
          <h1>ABOUT ME</h1>
          <h3>
            Omg hiiii! Welcome to my portfolio page! My name is Kayla, I am 26 year old Full Stack Software Engineer of 2 years, with over 35+ projects!
            I love reading, cooking soul food, modeling, dancing, video games, fashion, makeup. Obviously a big nerd about tech/AI. Please check out 
            my projects, contact me, and leave a cool message in my guest book! MWAH! XOXO~
            </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
