
import './App.css'
import About from './sections/About'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Learning from './sections/Learning'
import Navbar from './sections/Navbar'
import Skills from './sections/Skills'

function App() {

  return (
    <div className="flex flex-col items-center gap-32">

      {/* <div className='relative'> */}
      <Navbar />
      {/* </div> */}
      {/* <div className="relative "> */}
      <About />
      <div className="gradient-04 -z-50" />
      {/* </div> */}
      {/* <div className='h-[3030px] '></div> */}
      <div className='relative'>
        <div className="gradient-04 -z-50" />
        <Learning />
      </div>
      <div className='relative'>
        <div className="gradient-02 z-0" />
        <Skills />
      </div>
      <div className='relative'>
        <div className="gradient-03 -z-50" />
        <Certifications />
      </div>
      <Contact />
    </div>
  )
}

export default App
