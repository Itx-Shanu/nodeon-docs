import { Outlet } from "react-router";
import  Sidebar from "./Sidebar";

function index() {
  return (
    <div className='flex pt-25'>
      <div className='lg:w-1/2 xl:w-1/4 '>
       <Sidebar/>
      </div>
        <div className=' '> <Outlet /></div>
    </div>
  );
}

export default index;
