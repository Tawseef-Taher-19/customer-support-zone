import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TicketList from './components/TicketList'
import TaskStatus from './components/TaskStatus'
import ResolvedList from './components/ResolvedList'
import Footer from './components/Footer'
import ticketsData from './data/tickets'

function App() {
  const [tickets, setTickets] = useState(ticketsData)
  const [inProgressTickets, setInProgressTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  const handleAddToProgress = (ticket) => {
    const alreadyAdded = inProgressTickets.find((item) => item.id === ticket.id)
    const alreadyResolved = resolvedTickets.find((item) => item.id === ticket.id)

    if (alreadyAdded || alreadyResolved) {
      toast.warning('This ticket is already being handled.')
      return
    }

    setInProgressTickets([...inProgressTickets, ticket])
    toast.success(`"${ticket.title}" added to Task Status.`)
  }

  const handleCompleteTask = (ticket) => {
    const updatedInProgress = inProgressTickets.filter((item) => item.id !== ticket.id)
    const updatedTickets = tickets.filter((item) => item.id !== ticket.id)

    setInProgressTickets(updatedInProgress)
    setResolvedTickets([...resolvedTickets, { ...ticket, status: 'Resolved' }])
    setTickets(updatedTickets)

    toast.success(`"${ticket.title}" marked as resolved.`)
  }

  return (
    <>
      <Navbar />
      <Banner
        inProgressCount={inProgressTickets.length}
        resolvedCount={resolvedTickets.length}
      />
      <main className="main-container">
        <div className="left-section">
          <TicketList tickets={tickets} onAddToProgress={handleAddToProgress} />
        </div>
        <div className="right-section">
          <TaskStatus
            inProgressTickets={inProgressTickets}
            onCompleteTask={handleCompleteTask}
          />
          <ResolvedList resolvedTickets={resolvedTickets} />
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App