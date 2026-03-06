function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Customer Support Zone</div>

      <div className="nav-right">
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Tickets</a></li>
          <li><a href="#">Support</a></li>
        </ul>
        <button className="new-ticket-btn">New Ticket</button>
      </div>
    </nav>
  )
}

export default Navbar