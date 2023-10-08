import { BiInfoCircle } from "react-icons/bi"

function Checkout() {
    return(
        <>
        <section className="bg-indigo-50">
            <div className="container">
            <div className=" py-8 grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 space-y-6 px-12">
            <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-yellow-500">
                    <BiInfoCircle size={20}/>
                    </div>
                    <div className="text-sm font-medium ml-3">Checkout</div>
                </div>
                <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                
            </div>
            <div className="rounded-md">
                <form id="payment-form" method="POST" action="">
                    <section>
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                        <label className="inline-flex xl:w-2/4 border-gray-200 py-3">
                                <span className="text-right px-2 xl:px-0 xl:text-none">First Name</span>
                                <input name="state" className="focus:outline-none px-3" placeholder="Tamim"/>
                            </label>
                            <label className="xl:w-2/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                                <span className="text-right px-2 xl:px-0 xl:text-none">Last Name</span>
                                <input name="postal_code" className="focus:outline-none px-3" placeholder="Iqbal"/>
                            </label>
                            
                            <label className="flex border-y border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Email</span>
                                <input name="email" type="email" className="focus:outline-none px-3" placeholder="try@example.com" required=""/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Phone Number</span>
                                <input name="number" type="number" className="focus:outline-none px-3" placeholder="017XXXXXXXX" required=""/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Address</span>
                                <input name="address" className="focus:outline-none px-3" placeholder="69, Road-1, Sector-7"/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Area</span>
                                <input name="city" className="focus:outline-none px-3" placeholder="Uttara"/>
                            </label>
                            <label className="inline-flex w-2/4 border-gray-200 py-3">
                                <span className="text-right px-2">City</span>
                                <input name="state" className="focus:outline-none px-3" placeholder="Dhaka"/>
                            </label>
                            <label className="xl:w-2/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                                <span className="text-right px-2 xl:px-0 xl:text-none">Division</span>
                                <input name="postal_code" className="focus:outline-none px-3" placeholder="Dhaka"/>
                            </label>
                            
                            
                            
                        </fieldset>
                    </section>
                </form>
            </div>
            <button className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                Cash On Delivery
            </button>
            <button className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                Pay  Online
            </button>
        </div>
        <div className="col-span-1 bg-white lg:block hidden">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
            <ul className="py-6 border-b space-y-6 px-8">
                <li className="grid grid-cols-6 gap-2 border-b-1">
                    <div className="col-span-1 self-center">
                        <img src="https://bit.ly/3oW8yej" alt="Product" className="rounded w-full"/>
                    </div>
                    <div className="flex flex-col col-span-3 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">Studio 2 Headphone</span>
                        <span className="text-gray-400 text-sm inline-block pt-2">Red Headphone</span>
                    </div>
                    <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                            <span className="text-gray-400">2 x €30.99</span>
                            <span className="text-pink-400 font-semibold inline-block">€61.98</span>
                        </div>
                    </div>
                </li>
                <li className="grid grid-cols-6 gap-2 border-b-1">
                    <div className="col-span-1 self-center">
                        <img src="https://bit.ly/3lCyoSx" alt="Product" className="rounded w-full"/>
                    </div>
                    <div className="flex flex-col col-span-3 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">Apple iPhone 13</span>
                        <span className="text-gray-400 text-sm inline-block pt-2">Phone</span>
                    </div>
                    <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                            <span className="text-gray-400">1 x €785</span>
                            <span className="text-pink-400 font-semibold inline-block">€785</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-pink-500">€846.98</span>
                </div>
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-pink-500">Free</span>
                </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>€846.98</span>
            </div>
        </div>
    </div>
            </div>
        </section>
        </>
    )
}

export default Checkout