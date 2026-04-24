import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex flex-row h-[700px] w-full overflow-y-auto lg:overflow-hidden">
        
     
        <div className="hidden lg:flex w-[70%] flex-col border-r-3 border-gray-200 bg-white pt-[0px] pl-[4%] relative">
          <div className="flex flex-col items-start h-full pr-100">
   
            <div className="absolute top-13 left-15 text-[#0064e0]">
              <svg viewBox="0 0 24 24" fill="currentColor" width="70" height="70">
              <path d="M22 12.037C22 6.494 17.523 2 12 2S2 6.494 2 12.037c0 4.707 3.229 8.656 7.584 9.741v-6.674H7.522v-3.067h2.062v-1.322c0-3.416 1.54-5 4.882-5 .634 0 1.727.125 2.174.25v2.78a12.807 12.807 0 0 0-1.155-.037c-1.64 0-2.273.623-2.273 2.244v1.085h3.266l-.56 3.067h-2.706V22C18.164 21.4 22 17.168 22 12.037z"></path>
            </svg>
            </div>
            
            <div className="absolute bottom-12 left-12 z-10">
  
 
                         <h1 className="text-[3.8vw] font-bold text-gray-900 leading-[1.0] tracking-tight pb-[50px]">
                                <span className="block">Explore</span>
                                <span className="block">the</span>
                                <span className="block">things</span>
    
                                <span className="block text-[#1877f2] mt-2">you love<span className="text-[black]">.</span></span>
                            </h1>
          </div>
       
            <div className="relative w-full">
            <div className="absolute right-[-90%] w-[700px] h-[700px]">
    <Image 
      src="/image.png" 
      alt="Facebook Layout Mockup" 
      fill 
      className="object-contain" 
      priority 
    />
  </div>
            </div>
          </div>
        </div>

    
        <div className="flex w-full lg:w-1/2 flex-col items-center justify-center p-10">


<div className="lg:hidden mb-12 mb-[100px] text-[#1877f2]">
            <svg viewBox="0 0 24 24" fill="currentColor" width="70" height="70">
              <path d="M22 12.037C22 6.494 17.523 2 12 2S2 6.494 2 12.037c0 4.707 3.229 8.656 7.584 9.741v-6.674H7.522v-3.067h2.062v-1.322c0-3.416 1.54-5 4.882-5 .634 0 1.727.125 2.174.25v2.78a12.807 12.807 0 0 0-1.155-.037c-1.64 0-2.273.623-2.273 2.244v1.085h3.266l-.56 3.067h-2.706V22C18.164 21.4 22 17.168 22 12.037z"></path>
            </svg>
            </div>


          <div className="w-full space-y-4">
            <h2 className="text-[20px] font-medium mb-6 text-[#262626] tracking-tight hidden lg:block pt-[35px]">Log into Facebook</h2>
            
            <form className="space-y-2">
              <input 
                type="text" 
                placeholder="Email or mobile number" 
                className="w-full px-4 py-[18px] bg-[#fafafa] border border-gray-300 rounded-[15px] text-[15px] font-medium focus:outline-none focus:border-gray-400 placeholder:text-gray-500"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full px-4 py-[18px] bg-[#fafafa] border border-gray-300 rounded-[15px] text-[15px] font-medium focus:outline-none focus:border-gray-400 placeholder:text-gray-500"
              />
              
              <button className="w-full bg-[#0064e0] hover:bg-blue-500 text-white font-semibold py-2 rounded-[20px] transition-colors mt-4">
                Log in
              </button>
            </form>

            <div className="text-center py-3">
                <button>
                   <a href="#" className="text-l font-medium">Forgot password?</a>
                </button>
            </div>

            <div className="space-y-4 mt-8 pt-[30px]">
              
              <button className="w-full border border-blue-500 text-blue-500 py-3 rounded-[20px] text-sm font-semibold hover:bg-blue-50">
                Create new account
              </button>
            </div>

            <div className="flex justify-center pt-0">
              <p className="text-black-500 text-[18px] font-medium">♾️ Meta</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="hidden lg:block pt-8 pb-2 border-t border-gray-200">
        <div className="flex flex-wrap text-left pl-[230px] gap-x-4 text-[15px] text-gray-500">
          <span>English (US)</span> <span>Filipino</span> <span>Bisaya</span> <span>Español</span> <span>日本語</span> <span>한국어</span> <span>中文(简体)</span> <span>More languages…</span> 

        </div>

            <div className="flex text-left pl-[230px] gap-4 text-[15px] text-gray-500 mt-4">
                <span>Sign Up</span> <span>Log In</span> <span>Messenger</span> <span>Facebook Lite</span> 
                <span>Video</span> <span>Meta Pay</span> <span>Meta Quest</span> <span>Ray-Ban Meta</span>
                <span>Meta AI</span> <span>Instagram</span> <span>Threads</span> <span>Privacy Policy</span>
            </div>


           <div className="flex text-left pl-[230px] gap-4 text-[15px] text-gray-500 mt-4">
                 <span>Privacy Center</span> <span>About</span> <span>Create ad</span> <span>Create Page</span> <span>Developers</span> 
                 <span>Careers</span> <span>Cookies</span> <span>Ad choices </span> <span>Terms</span> <span>Help</span>
                 <span>Contact Uploading & Non-Users</span>
           </div>

        <div className="flex text-left pl-[230px] gap-4 text-[15px] text-gray-500 mt-4">
    <span>Meta © 2026</span>
  </div>
      </footer>
    </div>
  );
}