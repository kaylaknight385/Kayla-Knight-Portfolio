import contactGif from '../assets/images/contact.gif';

function Contact() {
  return (
    <div className="contactPage">
      <div className="contact-container">
        <img src={contactGif} alt="Contact" className="contact-gif" />
        
        <div className="contact-content">
          <h1>Contact Me</h1>
          <h3>
            Feel free to reach out! I'd love to connect and chat about projects, opportunities, or just say hi!
          </h3>
          
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/kay-knight" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="/Knight, Kayla Resume (2).pdf" download="Kayla_Knight_Resume.pdf">
              Download Resume
            </a>
            <h4>Email me: 
              Kaylaknight385@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
