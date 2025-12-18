import { BookOpen, Video, Mic, File } from 'lucide-react';
import {Link} from 'react-router-dom';
import React from 'react';
import { Eye, UserRound } from "lucide-react";

interface SideNavProps {
  fetchedProfile?: Record<string, any>;
}

export default function SideNav({ fetchedProfile }: SideNavProps){
    return(
        <>
          <div className="container p-10">
            <Link to='/profile'>
                <div className="flex items-center gap-3 mb-5">
                {/* Avatar */}
                {/* <div className="w-12 h-12 rounded-full bg-neutral text-neutral-content flex items-center justify-center font-semibold">
                    <span>IB</span>
                </div> */}
                {
                    fetchedProfile?.profilePicture? (
                        <img
                        src={ fetchedProfile.profilePicture }
                        alt="Profile"
                        className="w-12 h-12 rounded-full mr-3"
                        />

                    ) : (
                        <div className="w-12 h-12 rounded-full bg-red-800 text-neutral-content flex items-center justify-center font-semibold">
                        <UserRound />
                        </div>
                    )
                }

                {/* Name */}
                <p className="text-gray-800 font-medium">{fetchedProfile?.firstName} {fetchedProfile?.lastName}</p>
                </div>
            </Link>
                
              <div className="flex flex-col w-full">
                <Link
                    to=""
                    className="flex items-center w-full gap-2  px-4 py-3 rounded-lg bg-[#800000]/80 hover:bg-[#800000] hover:text-white  text-white mb-2 transition"
                >

                    <BookOpen className='text-gray-800' size={18} />
                        <p className='text-white'>All Sermons</p>

                </Link>

                <Link
                    to=""
                    className="flex items-center w-full gap-2  px-4 py-3 rounded-lg bg-transparent hover:bg-[#800000] hover:text-white text-gray-800 mb-2 transition"
                >

                    <Video className='text-gray-800' size={18} />
                        <p className='text-gray-800 hover:text-white'>Video</p>

                </Link>

                <Link
                    to=""
                    className="flex items-center w-full gap-2  px-4 py-3 rounded-lg bg-transparent hover:bg-[#800000] hover:text-white text-gray-800 mb-2 transition"
                >

                    <Mic className='text-gray-800' size={18} />
                        <p className='text-gray-800 hover:text-white'>Audio</p>

                </Link>
                <Link
                    to=""
                    className="flex items-center w-full gap-2  px-4 py-3 rounded-lg bg-transparent hover:bg-[#800000] hover:text-white text-gray-800 mb-2 transition"
                >

                    <File className='text-gray-800' size={18} />
                        <p className='text-gray-800 hover:text-white'>Manuscript</p>

                </Link>
                </div>

                </div> 
        </>
    )
}