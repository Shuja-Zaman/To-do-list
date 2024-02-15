import Navbar from "@/components/ui/navbar"

export default function Contact(){
    return(
    <>
      <div className="main h-screen bg-black text-center">

        <Navbar/>

      <div className="title p-5">
        <h1 className="mt-9 text-center md:text-9xl text-5xl gradient-green font-extrabold">Contact Us<span className="text-9xl">.</span></h1>
      
      </div>

      <div className="flex flex-col gap-5 m-auto w-3/6  mt-6">
        <input placeholder="Username" className="rounded-lg py-3 border-none px-2 bg-indigo-100 hover:bg-indigo-200" type="text" />

        <input className="rounded-lg py-3 border-none px-2 bg-indigo-100 hover:bg-indigo-200" placeholder="Email" type="email" />

        <textarea className="rounded-lg py-3 border-none px-2 bg-indigo-100 hover:bg-indigo-200" name="" id="" cols="30" rows="5" placeholder="Message"></textarea>

        <button className="px-4 py-2 bg-slate-100 hover:bg-slate-300 rounded-2xl" type="submit">Submit</button>
      </div>


    </div>
    </>
)
}