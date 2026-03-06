function TicketCard({ ticket, onAddToProgress }) {
  const { title, description, customer, priority, status, createdAt } = ticket

  return (
    <div className="ticket-card">
      <h3>{title}</h3>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Customer:</strong> {customer}</p>
      <p><strong>Priority:</strong> {priority}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Created At:</strong> {createdAt}</p>

      <button onClick={() => onAddToProgress(ticket)} className="progress-btn">
        Add to Task Status
      </button>
    </div>
  )
}

export default TicketCard