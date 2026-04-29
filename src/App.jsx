import Navbar from './components/Navbar'
import ProductViewer from './components/ProductViewer'
import Hero from './components/Hero'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import ShowCase from './components/ShowCase';


gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <ShowCase />
    </main>
  )
}

export default App