import React, { useContext, useEffect, useState } from "react"
import { db } from "../../firebase.config"
import { doc, onSnapshot } from "firebase/firestore"
import { AuthContext } from "../../context/AuthContext"
import { ChatContext } from "../../context/ChatContext"

const Chats = () => {
  const [chats, setChats] = useState([])
  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
        console.log(doc.data())
      })

      return () => {
        unsub()
      }
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u })
  }

  return (
    <div className="bg-purple-700 h-full">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
            className="flex items-center gap-2 py-3 px-3 hover:bg-purple-400 cursor-pointer"
          >
            <img
              className="w-10 h-10 object-cover rounded-full cursor-pointer"
              src={chat[1].userInfo?.photoURL}
              alt="user profile icon"
            />
            <div className="text-white">
              <h3 className="font-bold capitalize">
                {chat[1].userInfo?.displayName}
              </h3>
              <p className="text-sm">{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Chats
