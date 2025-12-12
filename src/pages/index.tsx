import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {Link} from 'react-router-dom';
import Login from "../components/form/Login";



export default function Index() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex w-full min-h-screen flex-col lg:flex-row bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgroud_banner.png')" }}
    >
      {/* Left side text */}
        <img src="/christful_logo.png" alt="Christful Logo" className="w-32 mb-6 absolute" />
      <div className="flex-1 hidden lg:flex flex-col justify-center px-[200px] text-gray-800 bg-white/70 lg:bg-transparent">

        <h1 className="font-bold text-7xl mb-4 mt-40 text-[#800000]">Welcome back!</h1>
        <p className="italic text-3xl mb-6">“The Lord is your keeper.” ~ Psalm 121:5</p>

        <p className="mb-6 text-lg leading-relaxed">
          We’re glad you’re here again.<br />
          Every step you take closer to Christ draws you deeper into peace, purpose,
          and His unfailing love.<br />
          Keep seeking, He is always near.
        </p>

        <p className="font-semibold italic mt-auto mb-4">
          "Christ in you, the hope of glory." ~ Colossians 1:27
        </p>
      </div>

      {/* Right side login form */}
      <Login />
      {/* <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-gray-800 text-2xl font-medium mb-6">Log in to Christful</h2>

          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-4 p-3 rounded-lg bg-white border border border-gray-300  text-gray-800 focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-lg border border border-gray-300  bg-white text-gray-800 focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <Link to=''>
          <small className="text-gray-500">Forgotten Password</small>
          </Link>

          <button className="w-full bg-red-900 text-white my-4 font-semibold py-3 rounded-lg hover:bg-red-800 transition">
            Log in
          </button>

          {/* <p className="text-center text-sm text-gray-500 mt-4">Forgotten Password?</p> */}

          
          
          {/* <div className="text-center">
          <Link to='/signup' className="text-center">No account? Join Christful today</Link>
          </div>
        </div> */}
      {/* </div>  */}
    </div>
  );
}
