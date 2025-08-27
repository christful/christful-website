import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react' 

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex w-full min-h-screen flex-col lg:flex-row">
      
      {/* Left side with background - hidden on mobile */}
      <div 
        className="hidden lg:flex flex-1 flex-col justify-center px-10 bg-cover bg-center bg-no-repeat text-gray-800"
        style={{ backgroundImage: "url('/backgroud_banner.png')" }}
      >
        <img src="/christful_logo.png" alt="Christful Logo" className="w-32 mb-6" />

        <h1 className="font-bold text-4xl mb-4">Welcome back!</h1>
        <p className="italic text-lg mb-6">“The Lord is your keeper.” ~ Psalm 121:5</p>

        <p className="mb-6 leading-relaxed">
          We’re glad you’re here again.<br />
          Every step you take closer to Christ draws you deeper into peace, purpose, 
          and His unfailing love.<br />
          Keep seeking, He is always near.
        </p>

        <p className="font-semibold italic mt-auto">
          "Christ in you, the hope of glory." ~ Colossians 1:27
        </p>
      </div>

      {/* Right side with login form - full width on mobile */}
      <div className="flex-1 bg-[#800000] flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white/10 p-8 rounded-2xl shadow-lg">
          <h2 className="text-white text-2xl font-bold mb-6">Signup to Christful</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-3 rounded-lg bg-white border border-gray-300 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-4 p-3 rounded-lg bg-white border border-gray-300 focus:outline-none"
          />

          {/* Password field with toggle */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-lg border bg-white border-gray-300 focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button className="w-full bg-red-900 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition">
            Log in
          </button>

          <p className="text-center text-sm text-gray-200 mt-4">Forgotten Password?</p>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-400"></div>
            <span className="px-3 text-gray-200 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 font-medium py-3 rounded-lg shadow hover:bg-gray-100 transition">
            <img src="/icon/google_logo.png" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}
