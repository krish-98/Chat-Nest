import React, { useContext } from "react"
import { MdLogout } from "react-icons/md"

import { signOut } from "firebase/auth"
import { auth } from "../../firebase.config"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <h2 className="text-2xl font-bold text-white tracking-wider">
        Chat Nest
      </h2>

      <div className="flex items-center gap-2 text-white">
        <img
          className="w-10 h-10 object-cover rounded-full cursor-pointer ring-2 ring-purple-400 p-[.1rem]"
          src={currentUser?.photoURL}
          alt="profile icon"
        />
        <p className="text-xl font-medium tracking-wide">
          {currentUser?.displayName}
        </p>
        <MdLogout
          onClick={() => signOut(auth)}
          className="w-5 h-5 cursor-pointer"
        />
      </div>
    </nav>
  )
}

export default Navbar
