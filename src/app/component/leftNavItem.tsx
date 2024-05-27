'use client';
import React, { Component } from "react";
import { useRouter } from "next/navigation";

function LeftNavItem({ href, Icon, name }: { href: string, Icon: React.ReactNode, name: string }) {
  const router = useRouter();
  return (
    <li onClick={() => { router.push(href ?? '/') }} className="flex w-full justify-between text-xl text-white hover:text-gray-300 cursor-pointer items-center">
      <span className="flex items-center ml-5 mb-3 focus:outline-none focus:ring-2 focus:ring-white">
        {Icon}
        <span className="text-sm ml-2">{name}</span>
      </span>
    </li >
  );
}

export default LeftNavItem;
