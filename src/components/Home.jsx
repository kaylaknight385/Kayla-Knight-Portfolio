import gif1 from '../assets/images/sitting.gif';
import gif2 from '../assets/images/toot.gif';
import gif3 from '../assets/images/puffer.gif';
import gif4 from '../assets/images/pinksit.gif';
import gif5 from '../assets/images/pink.gif';
import bow from '../assets/images/prettybow.webp';

function Home() {
  return (
    <div id="homePage">
      <main>
        <h1>
            Welcome 2 my page</h1>
      </main>
      
      {/* Pretty bows across the page */}
      <img src={bow} alt="bow" className="bow bow1" />
      <img src={bow} alt="bow" className="bow bow2" />
      <img src={bow} alt="bow" className="bow bow3" />
      <img src={bow} alt="bow" className="bow bow4" />
      <img src={bow} alt="bow" className="bow bow5" />
      
      {/* doll gifs around music player */}
      <img src={gif1} alt="decoration" className="decor-gif gif1" />
      <img src={gif2} alt="decoration" className="decor-gif gif2" />
      <img src={gif3} alt="decoration" className="decor-gif gif3" />
      <img src={gif4} alt="decoration" className="decor-gif gif4" />
      <img src={gif5} alt="decoration" className="decor-gif gif5" />
    </div>
  );
}

export default Home;
