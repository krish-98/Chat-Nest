import React, { useContext, useState } from "react"
import { BsSearch } from "react-icons/bs"

import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore"
import { db } from "../../firebase.config"
import { AuthContext } from "../../context/AuthContext"

const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const { currentUser } = useContext(AuthContext)

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

  const handleSelect = async () => {
    // Check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, "chats", combinedId))
      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] })

        // Create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        })

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        })
      }
    } catch (err) {}

    setUser(null)
    setUsername("")
    // Create user chats
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
          value={username}
          placeholder="Find a user"
        />
      </div>
      {error && <p>User not found!</p>}
      {user && (
        <div
          onClick={handleSelect}
          className="flex items-center gap-2 py-3 px-3 bg-purple-500 hover:bg-purple-700 cursor-pointer border-b"
        >
          <img
            className="w-10 h-10 object-cover rounded-full cursor-pointer"
            src={user?.photoURL}
            alt="User Profile"
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
