'use client';
import React, { useEffect } from 'react';
import LeftNav from "./LeftNav";
import NavBar from "./NavBar";
import { UserButton, useClerk } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
function Layout({ children }: { children: React.ReactNode }) {
  const { props } = children as { props: any };
  const { user } = props;
  const { signOut } = useClerk();
  const username=useUser().user?.username;
  return (
    <div className="h-full">
       
      <aside className="overflow-y-auto ml-[-100%] bg-gray-800 shadow fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r transition duration-300 md:w-2/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    
        <div className='flex '>
        <div className=" flex-auto ml-5 mt-14 ">
                <UserButton
                afterSignOutUrl='/'
                />
            </div>
          <div className="flex-auto mt-8 ">
            <h5 className="hidden mt-4 text-xl font-semibold text-white lg:block">
              {username}
            </h5>
            <span className="hidden text-gray-200 lg:block">Admin</span>
          </div>
        </div>
        <LeftNav></LeftNav>
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button onClick={() => signOut({redirectUrl:'/' })}
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
        
        </div>
      </aside>
      <div className="ml-auto mb-6 md:w-10/12 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <NavBar {...props}></NavBar>
        <div className=" p-6">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
export default Layout
