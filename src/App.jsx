import BgVideo from './assets/earth-bg.mp4'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        {/* <Hero /> */}
      </div>
      {/* <HeroCard /> */}
      {/* <Rapidscat /> */}
      {/* <Satelite /> */}
      {/* <Footer /> */}
      {/* <Footer5 /> */}
    </div>
  )
}

export default App
