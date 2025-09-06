import Header from '../../components/Header'
import {Link} from 'react-router-dom';
import { BookOpen, Video, Mic, File, Search, Paperclip, Smile } from 'lucide-react';
import GroupChat from '../../components/GroupChat';


export default function Group() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Body: Sidebar + Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <GroupChat />
        

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col overflow-hidden bg-white rounded-2xl m-5 shadow-lg">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/40.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-800">Grow with God</h2>
                <p className="text-sm text-gray-500">25 online</p>
              </div>
            </div>
            <div className="flex gap-4 text-gray-600">
              <Video className="cursor-pointer" />
              <Mic className="cursor-pointer" />
              <File className="cursor-pointer" />
            </div>
          </div>

          {/* ✅ Messages Area with Telegram Background */}
          <div
            className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
            style={{
              backgroundImage: `url('https://telegram.org/file/811140846/1/tUe2uVz9HMA.232054/bg_27.webp')`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
              backgroundPosition: 'center',
            }}
          >
            {/* Chat Start */}
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    alt="Obi-Wan"
                  />
                </div>
              </div>
              <div className="chat-header text-gray-800">
                Obi-Wan Kenobi
                <time className="text-xs text-gray-800 ml-2">12:45</time>
              </div>
              <div className="chat-bubble bg-[#cc6666] ">You were the Chosen One!</div>
              <div className="chat-footer text-gray-800">Delivered</div>
            </div>

            {/* Chat End */}
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                    alt="Anakin"
                  />
                </div>
              </div>
              <div className="chat-header text-gray-800">
                Anakin
                <time className="text-xs text-gray-800 ml-2">12:46</time>
              </div>
              <div className="chat-bubble bg-[#a63939]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </div>
              <div className="chat-footer text-gray-800">Seen at 12:46</div>
            </div>


            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    alt="Obi-Wan"
                  />
                </div>
              </div>
              <div className="chat-header text-gray-800">
                Obi-Wan Kenobi
                <time className="text-xs text-gray-800 ml-2">12:45</time>
              </div>
              <div className="chat-bubble bg-[#cc6666] ">Jesus Loves YOU.</div>
              <div className="chat-footer text-gray-800">Delivered</div>
            </div>
          </div>

          {/* ✅ Input Bar */}
          <div className="border-t px-4 py-3 m-5 shadow-lg rounded-2xl bg-white flex items-center gap-3">
            <button className="text-gray-500 hover:text-gray-700 transition">
              <Paperclip />
            </button>

            <div className="flex-1">
              <input
                type="text"
                placeholder="Type a message"
                className="w-full p-2.5 px-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="text-gray-500 hover:text-gray-700 transition">
                <Smile />
              </button>
              <button className="text-gray-500 hover:text-gray-700 transition">
                <Mic />
              </button>
              <button className="text-[#800000] hover:text-red-900 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
