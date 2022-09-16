import React from "react"
import Profile from "../../Assets/user.jpg"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-purple-500">
      <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
        Chat Nest
      </h2>

      <div className="flex items-center gap-2">
        <div className="">
          <img
            className="w-10 h-10 object-cover rounded-full cursor-pointer ring-2 ring-purple-400 p-[.1rem]"
            src={Profile}
            alt="profile icon"
          />
        </div>
        <p className="font-semi-bold">Kelly</p>
        <button className="self-start text-xs font-light tracking-wide bg-white py-1 px-2 rounded-lg border-none hover:bg-slate-50 focus:outline-purple-400">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
