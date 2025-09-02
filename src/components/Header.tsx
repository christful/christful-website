// import React, { useState } from "react";
import { PiChurchLight } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { BsMic } from "react-icons/bs";
import { HiOutlineViewGrid } from "react-icons/hi";
// import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <>
        <header className="w-full bg-white drop-shadow-sm scro flex ">
        <div className="navbar text-gray-800 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content text-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl"><img src="/christful_logo.png" alt="" width='80px' /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a><PiChurchLight className="text-4xl text-[#800000]" /></a></li>
            <li className="mx-30"><a><GrGroup className="text-3xl text-gray-500" /></a></li>
            <li><a><BsMic className="text-3xl text-gray-500" /></a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <label className="input bg-gray-200 rounded-3xl">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
                {/* <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd> */}
            </label>

            <a className=""><HiOutlineViewGrid className="text-5xl text-gray-400 p-2 bg-gray-200 rounded-full mx-10" /></a>
        </div>
        </div>
        </header>
        </>
    )
}