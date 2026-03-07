function TicketCard({ ticket, onAddToProgress }) {
  const { id, title, description, customer, priority, status, createdAt } = ticket

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{title}</h3>
        <span className={`status-badge ${status.toLowerCase().replace(" ", "-")}`}>
          {status}
        </span>
      </div>

      <p className="ticket-desc">{description}</p>

      <div className="ticket-meta">
        <span className="ticket-id">#{id}</span>

        <span className={`priority-badge ${priority.toLowerCase()}`}>
          {priority.toUpperCase()} PRIORITY
        </span>

        <span className="ticket-customer">{customer}</span>
        <span className="ticket-date">{createdAt}</span>
      </div>

      <button onClick={() => onAddToProgress(ticket)} className="progress-btn">
        Add to Task Status
      </button>
    </div>
  )
}

export default TicketCard