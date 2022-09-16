import React from "react"
import Attach from "../../Assets/attach.png"
import Img from "../../Assets/img.png"

const InputField = () => {
  return (
    <div className="flex justify-between items-center bg-white px-2">
      <input
        className="flex-1 border-none outline-none py-4 px-3"
        type="text"
        placeholder="Type something..."
      />

      <div className="flex items-center gap-2 ">
        <img
          className="w-7 h-7 cursor-pointer"
          src={Attach}
          alt="attach something"
        />
        <input className="hidden" type="file" id="image" accept="image/*" />
        <label htmlFor="image">
          <img className="w-7 h-7 cursor-pointer" src={Img} alt="send images" />
        </label>

        <button className="font-semibold bg-white text-purple-400 px-4 py-1 outline-none border-none">
          Send
        </button>
      </div>
    </div>
  )
}

export default InputField
