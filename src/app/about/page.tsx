import Link from "next/link"
import Navbar from "@/components/ui/navbar"

export default function About(){
    return(
    <>
    <div className="main h-screen bg-black text-center">
        <Navbar />

      <div className="title p-5">
        <h1 className="mt-9 text-center md:text-9xl text-5xl gradient-green font-extrabold">MYTE<span className="text-9xl">.</span></h1>
      
      </div>

      <div className="m-auto w-3/6  mt-6">
      <p className="text-center tracking-wide leading-loose text-white ">

Our task manager app is meticulously crafted with cutting-edge technologies to 
provide users with a seamless and efficient experience. The frontend, built using 
<Link href={"https://nextjs.org"} className="text-indigo-400 hover:underline"> Next.js </Link>,
embraces the power of React to deliver a highly responsive and interactive user interface.
<br />
The styling is handled with <Link href={"https://tailwindcss.com"} className="text-indigo-300 hover:underline"> Tailwind CSS </Link>, a utility-first
CSS framework that enables rapid development and easy customization.
<br />
      </p>
      </div>

      

    </div>
    </>
)
}