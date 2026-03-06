import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TicketList from './components/TicketList'
import Footer from './components/Footer'
import ticketsData from './data/tickets'

function App() {
  const [tickets] = useState(ticketsData)

  const handleAddToProgress = (ticket) => {
    alert(`${ticket.title} added to task status`)
  }

  return (
    <>
      <Navbar />
      <Banner inProgressCount={0} resolvedCount={0} />
      <main className="main-container">
        <TicketList tickets={tickets} onAddToProgress={handleAddToProgress} />
      </main>
      <Footer />
    </>
  )
}

export default App