function TaskStatus({ inProgressTickets }) {
  return (
    <div className="status-box">
      <h2 className="section-title">Task Status</h2>

      {inProgressTickets.length > 0 ? (
        inProgressTickets.map((ticket) => (
          <div key={ticket.id} className="task-item">
            <p>{ticket.title}</p>
            <button className="complete-btn">Complete</button>
          </div>
        ))
      ) : (
        <p className="empty-text">No tickets in progress.</p>
      )}
    </div>
  )
}

export default TaskStatus