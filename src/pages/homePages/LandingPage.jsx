import React from 'react'
import "./LandingPage.css"

const LandingPage = () => {
    return (
        <div className="App">
          <header className="header">
            <nav className="navbar">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </header>
          <main className="main-content">
            <section className="hero">
              <h1>Welcome to Our Website</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/learn-more" className="cta-button">
                Learn More
              </a>
            </section>
            <section className="features">
              <div className="feature">
                <h2>Feature 1</h2>
                <p>Description of Feature 1.</p>
              </div>
              <div className="feature">
                <h2>Feature 2</h2>
                <p>Description of Feature 2.</p>
              </div>
              <div className="feature">
                <h2>Feature 3</h2>
                <p>Description of Feature 3.</p>
              </div>
            </section>
          </main>
          <footer className="footer">
            <p>&copy; 2023 Your Company</p>
          </footer>
        </div>
      );
}

export default LandingPage
