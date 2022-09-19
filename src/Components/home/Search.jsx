import React, { useState } from "react"
import { BsSearch } from "react-icons/bs"

import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../../firebase.config"

const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    )

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log(doc.data())
      })
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  return (
    <div>
      <div className="flex items-center bg-purple-700 text-white py-1">
        <span className="pl-2">
          <BsSearch />
        </span>
        <input
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
          className="w-full outline-none border-none px-3 bg-purple-700 py-2 text-lg placeholder:text-gray-200"
          type="text"
          placeholder="Find a user"
        />
      </div>
      {error && <p>User not found!</p>}
      {user && (
        <div className="flex items-center gap-2 py-3 px-3 bg-purple-500 hover:bg-purple-700 cursor-pointer border-b">
          <img
            className="w-10 h-10 object-cover rounded-full cursor-pointer"
            src={user?.photoURL}
            alt=""
          />
          <div className="text-white">
            <span className="font-bold">{user?.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
