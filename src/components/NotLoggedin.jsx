import { Link } from "react-router-dom"

function NotLoggedin () {
  return (
    <>
        <section className="bg-[#F9FAFB]">
        <div className="min-h-screen flex items-center justify-center w-10/12 m-auto">
       

        <div className="w-full md:w-1/2 p-4 md:p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">You cant access the page</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">Please, Login to your accunt</p>
            <Link to={'/login'} className="px-6 py-3 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition duration-300 ease-in-out">Go to Login</Link>
        </div>
    </div>
        </section>
    </>
  )
}

export default NotLoggedin