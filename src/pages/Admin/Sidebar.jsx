import { Link, useLocation } from "react-router-dom";

const items = [
    {
        id: 1,
        name: "Dashboard",
        path: "/admin/home",
        // icon: <i className="fas fa-tachometer-alt"></i>
    },
    {
        id: 2,
        name: "Products",
        path: "/admin/home/product",
        // icon: <i className="fas fa-tachometer-alt"></i>
    },
    {
        id: 3,
        name: "Order",
        path: "/admin/home/order",
        // icon: <i className="fas fa-tachometer-alt"></i>
    },
    {
        id: 4,
        name: "Customer",
        path: "/admin/home/customer",
        // icon: <i className="fas fa-tachometer-alt"></i>
    },
    {
        id: 6,
        name: "Message",
        path: "/admin/home/message",
        // icon: <i className="fas fa-tachometer-alt"></i>
    },
    {
        id: 7,
        name: "Settings",
        path: "/admin/home/settings",
        // icon: <i className="fas fa-tachometer-alt"></i>
    },
    {
        id: 8,
        name: "Logout",
        path: "/admin/home/logout",
        // icon: <i className="fas fa-tachometer-alt"></i>
    }
]

function Sidebar(){
    const {pathname} = useLocation();
    console.log(pathname);

    return(
        <>
        <div className="w-1/6 text-white bg-black h-full space-y-2 flex flex-col justify-between items-center">
            <div className="">
                <h1 className="text-lg  font-bold my-4">Admin Panel</h1>
                <div>
                    <ul className="flex flex-col gap-y-3 font-light text-blue-200">
                        {
                            items.map((item) => {
                                if(item.path === pathname){
                                    return(
                                        <Link key={item.id} to={item.path}> <li  className="text-center bg-gray-800 rounded-md py-1 font-semibold text-blue-500">{item.name}</li> </Link>
                                        
                                    )
                                }
                                return(
                                    <Link key={item.id} to={item.path}><li  className="text-center bg-gray-800 rounded-md py-1 hover:text-blue-400">{item.name}</li></Link>
                                    
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar;