import Navbar from "@/components/ui/navbar";
import { Pencil, Trash2 } from "lucide-react";

export default function Tasks(){
    return (
        <>

            <div className="main bg-black h-screen ">

            <Navbar />

            <div className="content px-6">

            <button className="btn gradient-bg hover:opacity-90">Add Task</button>

            <div className="tasks gradient-bg mt-4 px-5 py-5 rounded-xl overflow-y-auto">
                <div className="task w-full bg-black text-white row justify-between px-4 py-3 rounded-lg mt-3">
                    <div className="first col">
                        <h1 className=""><span className="text-orange-200">Title:</span>  <span className="">dummy data</span> </h1>
                        <h1> <span className="text-orange-400">Description:</span> <span>dummy data hahaha</span> </h1>
                    </div>
                    <div className="second col ">
                        <button className="text-blue-300 md:block hidden hover:opacity-90">Update </button>
                        <Pencil className="text-blue-300 md:hidden hover:opacity-90 hover:cursor-pointer" />
                        <button className="text-red-300 md:block hidden hover:opacity-90">Delete </button> 
                        <Trash2  className="text-red-300 md:hidden hover:opacity-90 hover:cursor-pointer" />
                    </div>
                </div>


                
                
            </div>

            </div>


            </div>
        </>
    );
}