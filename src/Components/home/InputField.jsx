import React, { useContext, useState } from "react"
import { IoDocumentAttachOutline } from "react-icons/io5"
import { RiImageAddFill } from "react-icons/ri"
import { FiSend } from "react-icons/fi"

import { AuthContext } from "../../context/AuthContext"
import { ChatContext } from "../../context/ChatContext"
import {
  arrayUnion,
  doc,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore"
import { v4 as uuid } from "uuid"
import { db, storage } from "../../firebase.config"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"

const InputField = () => {
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid())
      const uploadTask = uploadBytesResumable(storageRef, img)

      uploadTask.on(
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text: text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: downloadURL,
                }),
              })
            })
            .catch((err) => console.log(err))
        }
      )
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text: text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      })

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      })

      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      })
    }
    setText("")
    setImg(null)
  }

  return (
    <div className="flex justify-between items-center bg-white px-2">
      <input
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border-none outline-none py-4 px-3"
        type="text"
        value={text}
        placeholder="Type something..."
      />

      <div className="flex items-center gap-4 mr-1">
        <IoDocumentAttachOutline className="w-6 h-6 cursor-pointer" />
        <input
          onChange={(e) => setImg(e.target.files[0])}
          className="hidden"
          type="file"
          id="image"
          accept="image/*"
        />
        <label htmlFor="image">
          <RiImageAddFill className="w-6 h-6 cursor-pointer" />
        </label>

        <button
          onClick={handleSend}
          className="flex items-center gap-1 font-semibold text-white bg-purple-400 px-3 py-1 outline-none border-none"
        >
          Send
          <FiSend />
        </button>
      </div>
    </div>
  )
}

export default InputField
