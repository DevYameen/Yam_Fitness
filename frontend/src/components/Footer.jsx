import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/mohammad-yameen-62b2b6253" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/DevYameen" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:mirzamohammadyameen@gmail.com" className="footer-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} Mohammad Yameen. All Rights Reserved.</p>
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
