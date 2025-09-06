import { useState } from 'react';
import { Link } from 'react-router-dom'; // if you're using React Router
import { Plus, Search } from 'lucide-react'; // make sure this icon package is installed

export default function GroupChat() {
  const [createGroupModal, setCreateGroupModal] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className="w-[400px] h-full overflow-y-auto bg-white border-r">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-gray-800 font-bold text-2xl">Group Chat</h1>
              <Search className="text-gray-800" />
            </div>

            <button
              onClick={() => setCreateGroupModal(true)}
              className="flex items-center gap-2 py-3 rounded-lg hover:text-white text-[#800000] mb-3 transition"
            >
              <Plus className="text-gray-800 bg-gray-200 p-2 rounded-full" size={30} />
              <p className="text-gray-800">Create group chat</p>
            </button>

            {/* Chat Link */}
            <Link to="">
              <div className="flex items-center space-x-4 bg-gray-50 hover:bg-gray-100 p-3 rounded-2xl mb-4">
                <div className="">
                  <img
                    src="https://randomuser.me/api/portraits/men/40.jpg"
                    alt="Profile"
                    className="w-14 h-14 rounded-full border-4 border-white object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="font-medium text-gray-800">Grow with God</h1>
                  <small className="text-sm text-gray-600 line-clamp-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, est quas consequatur...
                  </small>
                </div>
                <span className="badge badge-secondary badge-xs w-6 h-6 flex items-center justify-center rounded-full">
                  12
                </span>

              </div>
            </Link>
            <Link to="">
              <div className="flex items-center space-x-4 bg-gray-50 hover:bg-gray-100 p-3 rounded-2xl mb-4">
                <div className="">
                  <img
                    src="https://randomuser.me/api/portraits/men/47.jpg"
                    alt="Profile"
                    className="w-14 h-14 rounded-full border-4 border-white object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="font-medium text-gray-800">Christ Own Fellowship</h1>
                  <small className="text-sm text-gray-600 line-clamp-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, est quas consequatur...
                  </small>
                </div>
                <span className="badge badge-secondary badge-xs w-6 h-6 flex items-center justify-center rounded-full">
                  50
                </span>

              </div>
            </Link>

            {/* Repeat More Links Here */}
          </div>
        </div>


   
      {/* Modal */}
      {createGroupModal && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative shadow-lg">
            <button
              onClick={() => setCreateGroupModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>

            <h2 className="text-lg font-semibold  text-gray-800">Create Group Chat</h2>
                <div className="flex items-center my-4 justify-center">
                <label
                    htmlFor="image-upload"
                    className="w-32 h-32 border-2 border-dotted border-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:border-gray-600 transition"
                >
                    {preview ? (
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-full"
                    />
                    ) : (
                    <span className="text-gray-500 text-sm text-center px-2">Add Image</span>
                    )}
                    <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    />
                </label>
                </div>

            <input
              type="text"
              placeholder="Group name"
              className="w-full border border-gray-300 text-gray-800 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Group description (optional)"
              className="w-full h-24 border border-gray-300 text-gray-800 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            ></textarea>

            <div className="flex justify-end">
              <button
                onClick={() => setCreateGroupModal(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button className="bg-[#800000] text-white px-4 py-2 rounded-md hover:bg-red-700">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
