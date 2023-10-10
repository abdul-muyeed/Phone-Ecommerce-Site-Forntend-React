import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div >
        <div className="flex bg-neutral-200 h-screen w-screen"> 
        <Sidebar/>
        
      <div className="h-full w-full overflow-auto"><Outlet/></div>
    </div>
    </div>
    
  );
}

export default Layout;