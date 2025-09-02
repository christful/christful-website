import { BookOpen, Video, Mic, File } from 'lucide-react';
import {Link} from 'react-router-dom';



export default function SideNav(){
    return(
        <>
          <div className="container p-10">
               <div className="flex items-center gap-3 mb-5">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-neutral text-neutral-content flex items-center justify-center font-semibold">
                    <span>IB</span>
                </div>

                {/* Name */}
                <p className="text-gray-800 font-medium">Ibeh Promise</p>
                </div>
                
              <div className="flex flex-col w-full">
                <Link
                    to=""
                    className="flex items-center w-full gap-2  px-4 py-3 rounded-lg bg-[#800000]/10 hover:bg-[#800000] hover:text-white text-[#800000] mb-2 transition"
                >

                    <BookOpen className='text-gray-800' size={18} />
                        <p className='text-gray-800'>All Sermons</p>

                </Link>

                <Link
                    to=""
                    className="flex items-center w-full gap-2  px-4 py-3 rounded-lg bg-transparent hover:bg-[#800000] hover:text-white text-gray-800 mb-2 transition"
                >

                    <Video className='text-gray-800' size={18} />
                        <p className='text-gray-800'>Video</p>

                </Link>

                <Link
                    to=""
                    className="flex items-center w-full gap-2  px-4 py-3 rounded-lg bg-transparent hover:bg-[#800000] hover:text-white text-gray-800 mb-2 transition"
                >

                    <Mic className='text-gray-800' size={18} />
                        <p className='text-gray-800'>Audio</p>

                </Link>
                <Link
                    to=""
                    className="flex items-center w-full gap-2  px-4 py-3 rounded-lg bg-transparent hover:bg-[#800000] hover:text-white text-gray-800 mb-2 transition"
                >

                    <File className='text-gray-800' size={18} />
                        <p className='text-gray-800'>Manuscript</p>

                </Link>
                </div>

                </div> 
        </>
    )
}