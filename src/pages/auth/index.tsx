import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [slide, setSlide] = useState(1);

  return (
    <div
      className="flex w-full min-h-screen flex-col lg:flex-row bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgroud_banner.png')" }}
    >
      {/* Logo */}
      <img src="/christful_logo.png" alt="Christful Logo" className="w-32 mb-6 absolute" />

      {/* Left Side Text */}
      <div className="flex-1 hidden lg:flex flex-col justify-center px-[200px] text-white bg-white/70 lg:bg-transparent">
        {slide === 1 ? (
          <>
            <h1 className="font-bold text-7xl mb-4 mt-40">Welcome back!</h1>
            <p className="italic text-3xl mb-6">“The Lord is your keeper.” ~ Psalm 121:5</p>
            <p className="mb-6 text-lg leading-relaxed">
              We’re glad you’re here again.<br />
              Every step you take closer to Christ draws you deeper into peace, purpose,
              and His unfailing love.<br />
              Keep seeking, He is always near.
            </p>
          </>
        ) : (
          <>
            <h1 className="font-bold text-6xl mb-4 mt-40">You're almost there!</h1>
            <p className="italic text-3xl mb-6">“I will never leave you nor forsake you.” ~ Hebrews 13:5</p>
            <p className="mb-6 text-lg leading-relaxed">
            You are one step closer in building a solid relationship with christ.
            </p>
          </>
        )}
        <p className="font-semibold italic mt-auto mb-4">
          "Christ in you, the hope of glory." ~ Colossians 1:27
        </p>
      </div>

      {/* Right Side Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-gray-800 text-2xl font-medium">Join Christful today!</h2>
          <p className="text-gray-800 text-lg mb-6">Create an account</p>

          {/* Carousel */}
          <div className="carousel w-full">
            {/* Slide 1 */}
            <div id="item1" className="carousel-item w-full">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full mb-4 p-3 text-gray-800 rounded-lg bg-white border border-gray-300 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full mb-4 p-3 text-gray-800 rounded-lg bg-white border border-gray-300 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full mb-4 p-3 text-gray-800 rounded-lg bg-white border border-gray-300 focus:outline-none"
                />

                <button
                  onClick={() => {
                    document.getElementById("item2").scrollIntoView({ behavior: "smooth" });
                    setSlide(2);
                  }}
                  className="w-full bg-red-900 text-white mb-4 font-semibold py-3 rounded-lg hover:bg-red-800 transition"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Slide 2 */}
            <div id="item2" className="carousel-item w-full">
              <div className="w-full">
                {/* Password */}
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-3 pr-10 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full p-3 pr-10 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <button
                  onClick={() => {
                    document.getElementById("item1").scrollIntoView({ behavior: "smooth" });
                    setSlide(1);
                  }}
                  className="w-full bg-red-900 text-white mb-4 font-semibold py-3 rounded-lg hover:bg-red-800 transition"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex w-full justify-center gap-2 py-5">
            <div
              onClick={() => {
                document.getElementById("item1").scrollIntoView({ behavior: "smooth" });
                setSlide(1);
              }}
              className={`w-[10px] h-[10px] cursor-pointer  rounded-full transition ${
                slide === 1 ? "bg-[#800000]" : "bg-gray-400"
              }`}
            ></div>
            <div
              onClick={() => {
                document.getElementById("item2").scrollIntoView({ behavior: "smooth" });
                setSlide(2);
              }}
              className={`w-[10px] h-[10px] cursor-pointer  rounded-full transition ${
                slide === 2 ? "bg-[#800000]" : "bg-gray-400"
              }`}
            ></div>
          </div>

          {/* Already have an account */}
          <div className="text-center">
            <Link to="/" className="text-center text-blue-600 hover:underline">
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
