import Hero from './Hero';
import NotchFeatures from './NotchFeatures';
import bg from "../../assets/overallbg.png"
// import Navbar from '@/pages/Navbar';

function Home() {
  return (
    <div 
     style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: '100% ',
      backgroundRepeat: "no-repeat"
    

     }}
    >
      {/* <Navbar/> */}
      <Hero />
      <NotchFeatures/>
    </div>
  );
}

export default Home;
