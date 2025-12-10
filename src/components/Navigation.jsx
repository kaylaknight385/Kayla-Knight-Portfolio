function Navigation({ setCurrentPage }) {
  return (
    <header className="headerNav">
      <nav>
        <ul id="homeNav">
          <li><a onClick={() => setCurrentPage('home')}>Home</a></li>
          <li><a onClick={() => setCurrentPage('about')}>About</a></li>
          <li><a onClick={() => setCurrentPage('contact')}>Contact</a></li>
          <li><a onClick={() => setCurrentPage('shop')}>Shop</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
