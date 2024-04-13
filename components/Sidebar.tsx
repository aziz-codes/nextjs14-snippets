"use client";
import React, { useRef } from "react";
import { useStore } from "@/context/Context";
const Sidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen } = useStore();
  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div
      className={`hidden fixed h-screen w-0 md:flex   transition-width duration-150 ease-linear ${
        sidebarOpen ? "!w-60" : "w-20"
      } bg-sky-500 px-3 py-3 flex flex-col gap-3 items-center`}
      ref={sidebarRef}
    >
      <button
        className="rounded-md bg-green-500 outline-none border-none text-white px-2 py-2"
        onClick={handleToggle}
      >
        {sidebarOpen ? "Toggle Sidebar" : "Expand Sidebar"}
      </button>
    </div>
  );
};

export default Sidebar;
