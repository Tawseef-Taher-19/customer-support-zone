function ResolvedList({ resolvedTickets }) {
  return (
    <div className="status-box resolved-box">
      <h2 className="section-title">Resolved List</h2>

      {resolvedTickets.length > 0 ? (
        resolvedTickets.map((ticket) => (
          <div key={ticket.id} className="resolved-item">
            <p>{ticket.title}</p>
            <span className="resolved-badge">Resolved</span>
          </div>
        ))
      ) : (
        <p className="empty-text">No resolved tickets yet.</p>
      )}
    </div>
  )
}

export default ResolvedList