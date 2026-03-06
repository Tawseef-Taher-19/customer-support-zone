import TicketCard from './ticketCard'

function TicketList({ tickets, onAddToProgress }) {
  return (
    <div className="ticket-grid">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onAddToProgress={onAddToProgress}
        />
      ))}
    </div>
  )
}

export default TicketList