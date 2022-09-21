import React, { useContext, useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { ChatContext } from "../../context/ChatContext"
import { db } from "../../firebase.config"
import Message from "./Message"

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext)

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unSub()
    }
  }, [data.chatId])

  return (
    <div className="h-[calc(100%-124px)] bg-purple-200 overflow-auto scroll scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-white ">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  )
}

export default Messages
