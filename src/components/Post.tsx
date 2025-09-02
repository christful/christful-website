import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiMiniSignal } from "react-icons/hi2";
import {Mic} from 'lucide-react';
import { LiaPhotoVideoSolid } from "react-icons/lia";


export default function Post() {
  return (
    <div>
      <div className="create-post max-w-xl mx-auto bg-white rounded-lg shadow-md p-5 mb-10">
                <div className="flex items-center gap-3 mb-5">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-neutral text-neutral-content flex items-center justify-center font-semibold">
                    <span>IB</span>
                </div>

                {/* Name */}
                <input type="text" placeholder="Share the burdens that God layed in your heart" className="input w-[90%] text-gray-800 text-center rounded-full bg-[#D9D9D9]/30" />
                </div>
                <div className="flex justify-around items-center">
                <div className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition">
                  <HiMiniSignal className="text-red-500 w-5 h-5" />
                  <p className="text-sm font-medium">Go Live</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition">
                  <Mic className="text-gray-500 w-5 h-5" />
                  <p className="text-sm font-medium">Audio</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition">
                  <LiaPhotoVideoSolid className="text-gray-500 w-5 h-5" />
                  <p className="text-sm font-medium">Photo/Video</p>
                </div>

                </div>

                
      </div>
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
      <p className="text-sm text-gray-500">2 hrs ago</p>
    </div>
  </div>

  {/* Right: Ellipsis */}
  <button className="text-gray-600 hover:text-gray-800 px-2 rounded-full text-[200px]">
    <BsThreeDotsVertical />
  </button>
</div>


      {/* Post Content */}
      <p className="text-gray-800 mb-4">
        The day darkens and the time is come where true worshipers must be distinct. 🏖️☀️
      </p>

      {/* Post Image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Post"
        className="w-full rounded-lg mb-4"
      />

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
      <p className="text-sm text-gray-500">2 hrs ago</p>
    </div>
  </div>

  {/* Right: Ellipsis */}
  <button className="text-gray-600 hover:text-gray-800 px-2 rounded-full text-[200px]">
    <BsThreeDotsVertical />
  </button>
</div>


      {/* Post Content */}
      <p className="text-gray-800 mb-4">
        The day darkens and the time is come where true worshipers must be distinct. 🏖️☀️
      </p>

      {/* Post Image */}
      {/* <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Post"
        className="w-full rounded-lg mb-4"
      /> */}

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

    </div>
  );
}
