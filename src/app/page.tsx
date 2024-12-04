
import About from "<@>/components/widgets/About"
import Contact from "<@>/components/widgets/Contact"
import Destination from "<@>/components/widgets/Destination"
import Hero from "<@>/components/widgets/Hero"

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Destination />
      <Contact />
    </>
  )
}

export default page