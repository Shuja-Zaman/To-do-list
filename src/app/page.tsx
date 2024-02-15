import Navbar from "@/components/ui/navbar";
import Link from "next/link";

export default function Home(){

  return (
    <>
      <div className="main h-screen bg-black ">

        <Navbar />

        {/* large screens */}
        <div className="large hidden md:flex row justify-between px-5">
          <div className="text w-1/2 py-6 col  items-center"> 
            <h1 className="font-semibold lg:text-8xl md:text-7xl gradient-green py-3">Manage Your Tasks Efficiently</h1>
          </div>
          <div className="video text-center">
              <video className="rounded-xl" autoPlay muted width="100%" loop >
              <source src="todo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Link href="/tasks" className="text-slate-300 text-xl px-4 py-2 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/40 hover:bg-cyan-600 ">Tasks</Link>
          </div>
        </div>

        {/* mobile screens */}
        <div className="md:hidden small ">
          <h1 className=" font-bold text-4xl gradient-green">Manage Your Tasks Efficiently</h1>
          <Link href="/tasks" className="text-slate-300 text-xl px-4 py-2 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/40 hover:bg-cyan-600 ">Tasks</Link>

        </div>
        

      </div>
    </>
  );
}