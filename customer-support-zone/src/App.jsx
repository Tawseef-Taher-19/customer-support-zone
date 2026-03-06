import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TicketList from './components/TicketList'
import TaskStatus from './components/TaskStatus'
import Footer from './components/Footer'
import ticketsData from './data/tickets'

function App() {
  const [tickets] = useState(ticketsData)
  const [inProgressTickets, setInProgressTickets] = useState([])

  const handleAddToProgress = (ticket) => {
    const alreadyAdded = inProgressTickets.find((item) => item.id === ticket.id)

    if (alreadyAdded) {
      alert('This ticket is already being handled.')
      return
    }

    setInProgressTickets([...inProgressTickets, ticket])
    alert(`${ticket.title} added to task status`)
  }

  return (
    <>
      <Navbar />
      <Banner
        inProgressCount={inProgressTickets.length}
        resolvedCount={0}
      />
      <main className="main-container">
        <div className="left-section">
          <TicketList tickets={tickets} onAddToProgress={handleAddToProgress} />
        </div>
        <div className="right-section">
          <TaskStatus inProgressTickets={inProgressTickets} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App