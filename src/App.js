
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import SideBar from './components/sidebar/SideBar';
import DashBoard from './pages/dashboard/DashBoard';

function App() {
  return (
    <div className="bg-[#F5F5F5] px-2 py-3 sm:p-6">
      {/* a common navbar and sidebar layout  */}
      <div className="fixed z-50 top-0 left-0 right-0 px-2 py-3 sm:p-6">
        <Navbar/>
    </div>
    <div className=' mt-28 '>
      <div  className='bg-[#004D99] rounded-2xl pt-4 w-60  fixed hidden md:block '>
        <SideBar/>

      </div> 
      {/* routing between pages */}
      <div className=' md:ml-64 z-20'>
      <DashBoard/>

      {/* footer for all pages  */}
      <Footer/>
      
      </div>
    </div>
    </div>
  );
}

export default App;
