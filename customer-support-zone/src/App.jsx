import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Banner inProgressCount={0} resolvedCount={0} />
      <Footer />
    </>
  )
}

export default App