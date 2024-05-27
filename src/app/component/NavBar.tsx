import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import OrgSelector from "./orgsetup/orgselector";
const NavBar = (props: any) => {
  const router = useRouter();
  return (
    <div className="sticky z-10 top-0 h-18 border-b bg-white lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4">
        <SearchBar></SearchBar>
        <div className="flex space-x-4">
          <button
            aria-label="chat"
            className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            onClick={() => { router.push('/settings/organization') }}
          >
            <i className="pi pi-cog"></i>
          </button>
          <button
            aria-label="notification"
            className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 m-auto text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <OrgSelector {...props} />
        </div>
      </div>
    </div>
  )
}

export default NavBar;
