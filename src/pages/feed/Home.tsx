import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import GroupChat from '../../components/GroupChat';
import Post from '../../components/Post';
import AudioPost from '../../components/AudioPost';
import { useEffect, useState } from 'react';
import { fetchUserProfile } from '../../api/userApi';

export default function MainLayout() {
  const [fetchedProfile, setFetchedProfile] = useState({});

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const profile = await fetchUserProfile();
        setFetchedProfile(profile);
        console.log('User Profile:', profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    loadUserProfile();
  }, []);
  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      {/* Header at top */}
      <Header />

      {/* Main layout: sidebar - post - right panel */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-white border-r">
          <SideNav fetchedProfile={fetchedProfile}/>
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
        <div className="w-1/4 border-l bg-white ">
         <GroupChat />
        </div>
      </div>
    </div>
  );
}
