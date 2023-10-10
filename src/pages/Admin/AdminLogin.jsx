

function AdminLogin(){
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email,password} = e.target;
        const user = {email: email.value, password: password.value };
        
        
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)

        })
        
        if(res.status === 200){
            alert("User Created Successfully")
           window.location.href = '/'
        }else{
            alert("User Creation Failed" + res.status)
        }
    }
  return(
    <>
    
    <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
        <div className="h-max mx-auto flex flex-col items-center">
            <h1 className="text-xl font-bold text-center pb-10">Login as Admin</h1>
            
            <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
            <form method="POST" onSubmit={handleSubmit}>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">Email</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="mehedi@jaman.com"/>
                </div>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">Password</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******"/>
                </div>
                <div className="flex mt-2">
                    <div className="w-1/2">
                        <input type="checkbox" name="remeberMe"/>
                        <label htmlFor="remeberMe">Remeber me</label>
                    </div>
                    <div className="w-1/2">
                        <a className="font-bold text-blue-600" href="">Forgot password ?</a>
                    </div>
                </div>
                <br />
                <div>
                    <input className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Login" />
                </div>
                </form>
                
                
            </div>
            
            
        </div>
    </div>
    </>
  )
}

export default AdminLogin