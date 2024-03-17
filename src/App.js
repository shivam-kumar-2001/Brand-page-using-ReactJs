import './App.css';

function App() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./image/brand_logo.png" alt="logo"/>
        </div>
        <ul className="nav-list">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About Us</li>
          <li href="#">Contact</li>
        </ul>

        <button className="login">Login</button>
      </nav>


      <div className="hero">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="hero-button">
            <button>Shop Now</button>
            <button className="category-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icon">
            <button><img src="./image/flipkart.png"  alt="FlipKart"/></button>
            <button><img src="./image/amazon.png"  alt="Amazon"/></button>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="./image/hero-image.png" alt="hero-logo"/>
        </div>
      </div>
    </div>

  );
}

export default App;
