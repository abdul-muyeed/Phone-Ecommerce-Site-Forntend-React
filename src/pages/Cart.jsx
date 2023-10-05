import { BiTrash } from "react-icons/bi"

function Cart(){
    return(
        <>
        <section>
            <div className="container">
            <div className="my-5">
            <h1 className="text-2xl text-center font-semibold">Shopping Cart</h1>
            </div>
            <div>
            <div className="overflow-x-auto p-3">
                <table className="w-full table-auto">
                    <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                        <tr>
                            <th></th>
                            <th className="p-2">
                                <div className="text-left font-semibold">Product Name</div>
                            </th>
                            <th className="p-2">
                                <div className="text-left font-semibold">Quantity</div>
                            </th>
                            <th className="p-2">
                                <div className="text-left font-semibold">Total</div>
                            </th>
                            <th className="p-2">
                                <div className="text-center font-semibold">Action</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 text-sm">
                        
                        <tr>
                            <td className="p-2 flex items-center gap-3">
                                <input type="checkbox" className="h-5 w-5" value="id-1" onclick={()=>{}} />
                                <img className="h-20 w-20 border" src="/src/assets/s21-1.webp" alt="" />
                            </td>
                            <td className="p-2">
                                <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                                <div className="text-xs">৳ 117,990</div>
                                <div className="text-xs">RAM: 64GB</div>
                                <div className="text-xs">ROM: 128GB</div>
                                <div className="text-xs">Color: Black</div>
                            </td>
                            <td className="p-2">
                                <div className="text-left">1</div>
                            </td>
                            <td className="p-2">
                                <div className="text-left font-medium text-green-500">৳ 117,990</div>
                            </td>
                            <td className="p-2">
                                <div className="flex justify-center">
                                    <button>
                                    <BiTrash/>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        
                        <tr>
                            <td className="p-2">
                                <input type="checkbox" className="h-5 w-5" value="id-2" onclick="toggleCheckbox($el, 120.50)" />
                            </td>
                            <td className="p-2">
                                <div>
                                    <div className="font-medium text-gray-800">Logitech Keyboard</div>
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="text-left">1</div>
                            </td>
                            <td className="p-2">
                                <div className="text-left font-medium text-green-500">RM 120.50</div>
                            </td>
                            <td className="p-2">
                                <div className="flex justify-center">
                                    <button>
                                    <BiTrash/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="my-5 flex justify-between">
                <div>
                    <input type="text" placeholder="Coupon" className="px-4 py-2 text-gray-600 rounded-sm text-sm border border-gray-200   focus:outline-none" />
                    <button className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">Apply Coupon</button>
                </div>
                <div>
                    <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Delete</button>
                    <button className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Update</button>
                </div>
            </div>
            </div>
            <div className="my-5">
                <h1 className="text-2xl text-center font-semibold my-5">Cart Total</h1>
                <div className="border py-2">
                    <div className="flex justify-between px-2">
                        <div className="text-left font-semibold">Subtotal</div>
                        <div className="text-right">৳ 117,990</div>
                    </div>
                    <div className="flex justify-between border-b px-2">
                        <div className="text-left font-semibold">Shipping</div>
                        <div className="text-right">৳ 0</div>
                    </div>
                    <div className="flex justify-between pt-2 px-2">
                        <div className="text-left font-semibold">Total</div>
                        <div className="text-right">৳ 117,990</div>
                    </div>
                </div>

            </div>


            </div>
           
            
        </section>
        
        </>
    )
}

export default Cart