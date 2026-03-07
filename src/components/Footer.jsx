function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Customer Support Zone</h3>
          <p>Helping teams manage support tickets smoothly and efficiently.</p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Ticket Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">API Guide</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Customer Support Zone. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer