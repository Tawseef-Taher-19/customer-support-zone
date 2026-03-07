function TaskStatus({ inProgressTickets, onCompleteTask }) {
  return (
    <div className="status-box">
      <h2 className="section-title">Task Status</h2>

      {inProgressTickets.length > 0 ? (
        inProgressTickets.map((ticket) => (
          <div key={ticket.id} className="task-item">
            <p>{ticket.title}</p>
            <button onClick={() => onCompleteTask(ticket)} className="complete-btn">
              Complete
            </button>
          </div>
        ))
      ) : (
        <p className="empty-text">Select a ticket to add to Task Status</p>
      )}
    </div>
  )
}

export default TaskStatus