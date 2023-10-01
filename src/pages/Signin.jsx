import { Link } from "react-router-dom";
import Header from "../components/Header"

function LogIn(){
  return(
    <>
    <Header/>
    <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
        <div className="h-max mx-auto flex flex-col items-center">
            <h1 className="text-xl font-bold text-center pb-4">Create your account</h1>
            <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
            <div>
                    <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="name">Full Name</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="name" name="name" placeholder="Abdul Muyeed"/>
                </div>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">Email</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="abdul@muyeed.com"/>
                </div>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">Password</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******"/>
                </div>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">Confirm Password</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******"/>
                </div>
                <div>
                    <input className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Sign Up" />
                </div>
                <div>
                    <p className="text-center">Or continue with</p>
                </div>
                <div className="flex space-x-5">
                    <button className="bg-[#1D9BF0] w-1/2 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">Google</button>
                    <button className="bg-[#1D9BF0] w-1/2 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">Facebook</button>
                </div>
            </div>
            <p className="text-sm text-gray-500 mt-5">Already Have an account? <Link to="/login" className="text-[#4F46E5] font-bold">Login Here</Link></p>
        </div>
    </div>
    </>
  )
}

export default LogIn;