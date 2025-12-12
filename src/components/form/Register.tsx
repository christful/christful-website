import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [slide, setSlide] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle register submit
  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      setSuccess("Account created successfully!");
      console.log("Response:", data);

      // redirect to login page after success
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      const error = err as any;
      setError(error?.response?.data?.message || error?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-gray-800 text-2xl font-semibold">Join Christful today!</h2>
        <p className="text-gray-800 text-lg mb-6">Create an account</p>

        {/* Carousel */}
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div id="item1" className="carousel-item w-full">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full mb-4 p-3 text-gray-800 rounded-lg bg-white border border-gray-300 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full mb-4 p-3 text-gray-800 rounded-lg bg-white border border-gray-300 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-4 p-3 text-gray-800 rounded-lg bg-white border border-gray-300 focus:outline-none"
              />

              <button
                onClick={() => {
                  document.getElementById("item2")?.scrollIntoView({ behavior: "smooth" });
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
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
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
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                onClick={handleRegister}
                disabled={loading}
                className="w-full bg-red-900 text-white mb-4 font-semibold py-3 rounded-lg hover:bg-red-800 transition"
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>

              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex w-full justify-center gap-2 py-5">
          <div
            onClick={() => {
              document.getElementById("item1")?.scrollIntoView({ behavior: "smooth" });
              setSlide(1);
            }}
            className={`w-[10px] h-[10px] cursor-pointer rounded-full transition ${
              slide === 1 ? "bg-[#800000]" : "bg-gray-400"
            }`}
          ></div>
          <div
            onClick={() => {
              document.getElementById("item2")?.scrollIntoView({ behavior: "smooth" });
              setSlide(2);
            }}
            className={`w-[10px] h-[10px] cursor-pointer rounded-full transition ${
              slide === 2 ? "bg-[#800000]" : "bg-gray-400"
            }`}
          ></div>
        </div>

        {/* Already have an account */}
        <div className="text-center">
          <Link to="/login" className="text-center text-blue-600 hover:underline">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
