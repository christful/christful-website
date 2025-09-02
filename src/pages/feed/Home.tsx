import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import Post from '../../components/Post';
import AudioPost from '../../components/AudioPost';

export default function MainLayout() {
  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      {/* Header at top */}
      <Header />

      {/* Main layout: sidebar - post - right panel */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-1/5 bg-white border-r">
          <SideNav />
        </div>

        {/* Center: Scrollable Post Section */}
        <div className="flex-1 overflow-y-auto ">
          <div className="max-w-2xl mx-auto p-6 space-y-6 ">
            {/* Repeatable posts */}
            <Post />
            <AudioPost />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 border-l bg-white p-6">
          <h1 className="text-gray-800 font-bold text-2xl mb-4">Group Chat</h1>
          <Link
            to=""
            className="flex items-center gap-2 py-3 rounded-lg hover:text-white text-[#800000] transition"
          >
            <Plus className="text-gray-800 bg-gray-200 p-2 rounded-full" size={30} />
            <p className="text-gray-800">Create group chat</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
