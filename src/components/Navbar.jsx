function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CS — Ticket System</div>

      <div className="nav-right">
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="ticket-btn">
          <span className="plus">+</span>
          New Ticket
        </button>
      </div>
    </nav>
  )
}

export default Navbar