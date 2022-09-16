import React from "react"
import { IoDocumentAttachOutline } from "react-icons/io5"
import { RiImageAddFill } from "react-icons/ri"
import { FiSend } from "react-icons/fi"

const InputField = () => {
  return (
    <div className="flex justify-between items-center bg-white px-2">
      <input
        className="flex-1 border-none outline-none py-4 px-3"
        type="text"
        placeholder="Type something..."
      />

      <div className="flex items-center gap-4 mr-1">
        <IoDocumentAttachOutline className="w-6 h-6 cursor-pointer" />
        <input className="hidden" type="file" id="image" accept="image/*" />
        <label htmlFor="image">
          <RiImageAddFill className="w-6 h-6 cursor-pointer" />
        </label>

        <button className="flex items-center gap-1 font-semibold text-white bg-purple-400 px-3 py-1 outline-none border-none">
          Send
          <FiSend />
        </button>
      </div>
    </div>
  )
}

export default InputField
