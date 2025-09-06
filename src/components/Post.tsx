import { useState } from "react";
import {Link} from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiMiniSignal } from "react-icons/hi2";
import {Mic} from 'lucide-react';
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { GoTag } from "react-icons/go";


export default function Post() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('post');

  return (
    <div>
      <div className="create-post max-w-xl mx-auto bg-white rounded-lg shadow-md p-5 mb-3">
                <div className="flex items-center gap-3 mb-5">
                {/* Avatar */}
                {/* <div className="w-12 h-12 rounded-full bg-neutral text-neutral-content flex items-center justify-center font-semibold">
                    <span>IB</span>
                </div> */}
                    <img
                      src="https://randomuser.me/api/portraits/men/31.jpg"
                      alt="Profile"
                      className="w-12 h-12 rounded-full mr-3"
                    />

                {/* Name */}
                <div
  onClick={() => setShowModal(true)}
  className="cursor-pointer w-full bg-[#D9D9D9]/30 text-gray-600 text-center text-sm font-medium rounded-full px-4 py-2"
>
  Share the burdens that God layed in your heart
</div>

                {/* <input type="text" placeholder="Share the burdens that God layed in your heart" className="input w-[90%] text-gray-800 text-center rounded-full bg-[#D9D9D9]/30" /> */}
                </div>
                <div className="flex justify-around items-center">
                <div
                    onClick={() => {
                      setModalType("live");
                      setShowModal(true);
                    }}
                  className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition"
                >
                  <HiMiniSignal className="text-red-500 w-5 h-5" />
                  <p className="text-sm font-medium">Go Live</p>
                </div>

                  <div
                    onClick={() => {
                      setModalType("audio");
                      setShowModal(true);
                    }}
                    className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition"
                  >
                    <Mic className="text-gray-500 w-5 h-5" />
                    <p className="text-sm font-medium">Audio</p>
                  </div>

                  <div
                    onClick={() => {
                      setModalType("media");
                      setShowModal(true);
                    }}
                    className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition"
                  >
                    <LiaPhotoVideoSolid className="text-gray-500 w-5 h-5" />
                    <p className="text-sm font-medium">Photo/Video</p>
                  </div>


                </div>

                
      </div>
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-5 mb-3">
      {/* Header */}
    <div className="flex items-start justify-between mb-4">
  {/* Left: Avatar and User Info */}
  <div className="flex items-center">
    <img
      src="/PAPA-Adeboye-2.jpg"
      alt="Profile"
      className="w-12 h-12 rounded-full mr-3"
    />
    <div>
      <h2 className="font-semibold text-gray-900">
        Enoch Adejare Adeboye · <span className="text-[#800000] cursor-pointer">Follow</span>
      </h2>
      <p className="text-sm text-gray-500">2 min ago</p>
    </div>
  </div>

  {/* Right: Ellipsis */}
  <button className="text-gray-600 hover:text-gray-800 px-2 rounded-full text-[200px]">
    <BsThreeDotsVertical />
  </button>
</div>


      {/* Post Content */}
      <p className="text-gray-800 mb-4">
        Let me tell you clearly if you get a wife through the Facebook, you would lose her through the Youtube.
      </p>

      {/* Post Image */}
      <img
        src="/PAPA-Adeboye-2.jpg"
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
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-5 mb-3">
      {/* Header */}
    <div className="flex items-start justify-between mb-4">
  {/* Left: Avatar and User Info */}
  <div className="flex items-center">
    <img
      src="https://randomuser.me/api/portraits/men/34.jpg"
      alt="Profile"
      className="w-12 h-12 rounded-full mr-3"
    />
    <div>
      <h2 className="font-semibold text-gray-900">
        Micheal James · <span className="text-[#800000] cursor-pointer">Follow</span>
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
{showModal && (
  <div className="fixed inset-0 bg-black/70 bg-opacity-10 flex items-center justify-center z-50">
    <div className="bg-white w-full max-w-md rounded-lg p-6 relative shadow-lg">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
      >
        ✖
      </button>

      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        {modalType === "post" && "Create Post"}
        {modalType === "live" && "Start a Live Session"}
        {modalType === "audio" && "Start an Audio Chat"}
        {modalType === "media" && "Upload Media"}
      </h2>

      <div className="flex items-center mb-3">
        <img
          src="https://randomuser.me/api/portraits/men/31.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h2 className="font-semibold text-gray-900">Maxwell John</h2>
          <p className="text-sm text-gray-500">2 hrs ago</p>
        </div>
      </div>

      {/* Modal Inner Content */}
      {modalType === "post" && (
        <textarea
          placeholder="What's on your heart?"
          className="w-full h-32 border border-gray-300 text-gray-800 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      )}

      {modalType === "live" && (
        <input
          type="text"
          placeholder="Give your live a title"
          className="w-full border border-gray-300 text-gray-800 rounded-md p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      )}

      {modalType === "audio" && (
        <input
          type="text"
          placeholder="Topic of discussion"
          className="w-full border border-gray-300 text-gray-800 rounded-md p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      )}

      {modalType === "media" && (
        <>
          <input
            type="file"
            accept="image/*,video/*"
            className="mb-3"
          />
          <textarea
            placeholder="Say something about this photo/video..."
            className="w-full h-24 border border-gray-300 text-gray-800 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </>
      )}

      <div className="shadow rounded w-full p-3 flex justify-between text-gray-800 mt-4">
        <p>Add to your post</p>
        <div className="flex">
          <Link to="">
            <Mic className="text-gray-600" />
          </Link>
          <Link to="">
            <LiaPhotoVideoSolid className="text-gray-600 text-[20px] mx-3" />
          </Link>
          <Link to="">
            <GoTag className="text-gray-600 text-[20px]" />
          </Link>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={() => setShowModal(false)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          className={`px-4 py-2 rounded-md text-white ${
            modalType === "live"
              ? "bg-red-600 hover:bg-red-700"
              : modalType === "audio"
              ? "bg-gray-700 hover:bg-gray-800"
              : modalType === "media"
              ? "bg-[#800000] hover:bg-[#800000]/80"
              : "bg-[#800000] hover:bg-blue-700"
          }`}
        >
          {modalType === "live" && "Go Live"}
          {modalType === "audio" && "Start Audio"}
          {modalType === "media" && "Post Media"}
          {modalType === "post" && "Post"}
        </button>
      </div>
    </div>
  </div>
)}


    </div>

  );
}
