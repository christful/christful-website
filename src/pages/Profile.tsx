import Header from '../components/Header';
import Post from '../components/Post';
import {Link} from 'react-router-dom'

export default function Profile() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

        {/* Cover Section */}


        <div className="flex justify-center bg-white pb-30">
        <div className="relative w-[1000px] h-60 md:h-72 lg:h-80">
            {/* Cover Photo */}
            <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            alt="Cover"
            className="object-cover w-full h-full rounded-b-2xl"
            />

            {/* Profile Picture and Info */}
            <div className="absolute -bottom-16 left-6 md:left-12 w-full flex flex-col md:flex-row justify-between items-start md:items-end">
            {/* Profile Image + Info */}
            <div className="flex items-center space-x-4">
                <img
                src="https://randomuser.me/api/portraits/men/31.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <div className="pt-20">
                <h1 className="text-2xl font-medium text-gray-800">David Dominic</h1>
                <div className="text-sm text-gray-600 mt-1">
                    370 friends · Uploading 1 post ·{' '}
                    <Link to="" className="text-[#800000] font-semibold hover:underline">
                    View
                    </Link>
                </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 md:mt-0 pr-20 ">
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-300">
                Edit cover photo
                </button>
                <button className="bg-[#800000] text-white px-4 py-2 rounded-md hover:bg-[#800000]/50">
                Edit profile
                </button>
            </div>
            </div>
        </div>
        </div>

        {/* Profile Info Section */}
<div className="flex justify-center bg-gray-100 py-6">
  <div className="w-full max-w-[1000px] flex flex-col md:flex-row gap-6 px-4">
    {/* Left Column: About Me */}
    <div className="md:flex-1">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-lg font-semibold mb-4 text-gray-800">About Me</h1>
        <p className="text-gray-700 leading-relaxed">
          I’m David Chukwuchebem, a young Christian passionate about living for Christ,
          growing in faith, and using my gifts in technology and creativity to glorify God.
        </p>
        <button className="bg-gray-200 w-full text-gray-800 mt-6 px-4 py-2 rounded-md hover:bg-gray-300 transition">
          Edit Bio
        </button>
      </div>
    </div>

    {/* Right Column: Post */}
    <div className="md:flex-2">
      <Post />
    </div>
  </div>
</div>

    </div>
  );
}
