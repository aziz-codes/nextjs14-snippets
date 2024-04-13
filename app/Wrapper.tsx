"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useStore } from "@/context/Context";
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { sidebarOpen } = useStore();
  return (
    <div className="flex">
      <Sidebar />
      <main
        className={`flex flex-col ml-0  transition-all duration-150 ease-linear ${
          sidebarOpen ? "md:ml-60" : "!ml-20 "
        }  w-full overflow-hidden`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Wrapper;
