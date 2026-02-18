import Guestbook from './Guestbook';
import kirbyGif from '../assets/images/kirby.gif';

function Home() {
  return (
    <div id="homePage">
      <main>
        <h1>Welcome 2
          My Portfolio Page</h1>
      </main>
      <img src={kirbyGif} alt="Kirby" className="kirby-decoration" />
      <Guestbook />
    </div>
  );
}

export default Home;
