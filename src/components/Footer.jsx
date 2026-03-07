import { FaFacebook, FaInstagram, FaEnvelope, FaGlobe } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column footer-brand">
            <h3>CS — Ticket System</h3>
            <p>
              CS Ticket System is a simple and efficient platform designed to manage
              customer support requests. It helps teams track, organize, and resolve
              issues quickly, ensuring better communication and improved customer
              satisfaction. Built with a focus on usability and productivity, the
              system streamlines support workflows for faster problem resolution.
            </p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Contact Sales</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Products &amp; Services</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Download Apps</a></li>
            </ul>
          </div>

          <div className="footer-column footer-info">
            <h4>Information</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Join Us</a></li>
            </ul>
          </div>

          <div className="footer-column footer-social">
            <h4>Social Links</h4>
            <ul className="social-links">
              <li>
                <a href="#">
                  <FaXTwitter /> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram /> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook /> CS — Ticket System
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGlobe /> CS — Ticket System
                </a>
              </li>
              <li>
                <a href="mailto:support@cst.com">
                  <FaEnvelope /> support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer