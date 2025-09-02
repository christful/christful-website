import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

export default function AudioPost() {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-5 mb-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        {/* Left: Avatar and User Info */}
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold text-gray-900">
              John Doe · <span className="text-[#800000] cursor-pointer">Follow</span>
            </h2>
            <p className="text-sm text-gray-500">1 hr ago</p>
          </div>
        </div>

        {/* Right: Ellipsis */}
        <button className="text-gray-600 hover:text-gray-800 px-2">
          <BsThreeDotsVertical size={20} />
        </button>
      </div>

       {/* Post Content */}
      <p className="text-gray-800 mb-4">
        The day darkens and the time is come where true worshipers must be distinct. 🏖️☀️
      </p>
      
      {/* Audio Bubble */}
      <div className="bg-[#f0f0f0] text-gray-800 rounded-2xl px-4 py-3 w-full mb-4">
        <div className="flex items-center gap-3">
          {/* Play button */}
          <button className="text-[#800000] rounded-full p-2 hover:text-[#990000] transition">
            ▶
          </button>

          {/* Audio Waveform Placeholder (you can replace with real waveform later) */}
          <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden w-40">
            <div className="h-full bg-[#800000] w-1/3 animate-pulse"></div>
          </div>

          {/* Duration */}
          <span className="text-sm text-gray-600">0:12</span>
        </div>
      </div>


      {/* Action Buttons */}
      <div className="flex justify-between text-gray-600 border-t border-gray-200 pt-3">
        <button className="flex items-center space-x-2 hover:text-blue-600">
          <AiOutlineLike />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600">
          <FaRegComment />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600">
          <CiShare2 />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}
