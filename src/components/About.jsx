import bunnykayImg from '../assets/images/bunnykay.jpg';
import tumblrBorder from '../assets/images/tumblr_74db12128477250759f0f1309b04fce4_00027172_1280.png';

function About() {
  return (
    <div className="aboutPage">
      <div className="about-container">
        <div id="comingSoon">
          <img src={bunnykayImg} alt="Background" className="bunny-background" />
          <img src={tumblrBorder} alt="Frame" className="tumblr-frame" />
        </div>
        
        <div className="about-content">
          <h1>ABOUT ME</h1>
          <h3>
            Omg hiiii! Welcome to my portfolio page! My name is Bunnykay, I am 26 year old Full Stack Software Engineer.
            I love reading, cooking soul food, dancing, video games, fashion, makeup. I could go ooooon. Please check out 
            my projects, contact me, and leave a cool message in my guest book! MWAH! XOXO Bunny~
            </h3>
          <img src="../assets/images/album.png" alt="Hello Kitty Album" />
        </div>
      </div>
    </div>
  );
}

export default About;
