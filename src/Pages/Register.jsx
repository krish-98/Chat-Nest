import React, { useState } from "react"
import Google from "../Assets/google.png"
import Gallery from "../Assets/gallery.png"
import { Link } from "react-router-dom"

const Register = () => {
  // const [files, setFiles] = useState(null)
  // const filesHandler = (e) => {
  //   e.preventDefault()

  //   console.log(e.target.files)
  //   setFiles(e.target.files[0])
  // }

  return (
    <div className="flex justify-center items-center h-screen bg-purple-400">
      <div className="flex flex-col items-center gap-6 bg-white py-9 px-9 rounded-xl md:px-20">
        {JSON.stringify(files)}
        {files && <h1>{files.name}</h1>}
        <div className="flex items-center justify-center gap-3 border border-gray-200 py-3 px-4 rounded-lg ring-1 cursor-pointer w-72">
          <img
            className="w-6 h-6 object-contain"
            src={Google}
            alt="Login with Google"
          />
          <p className="font-bold">Sign up with Google</p>
        </div>

        <p>OR</p>

        <form className="flex flex-col ic w-full">
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="py-1 outline-none border-b border-b-gray-500"
            type="text"
            id="name"
          />
          <br />

          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="py-1 outline-none border-b border-b-gray-500"
            type="email"
            id="email"
          />
          <br />

          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="py-1 outline-none border-b border-b-gray-500"
            type="password"
            id="password"
          />
          <br />

          <label
            className="flex items-center gap-2 cursor-pointer"
            htmlFor="file"
          >
            <img className="w-8" src={Gallery} alt="Add an image" />
            <p className="text-sm text-gray-400">Choose an Avator</p>
          </label>
          <input
            // onChange={filesHandler}
            className="hidden"
            type="file"
            id="file"
            multiple
          />

          <button
            className="text-white font-semibold py-2 mt-6 bg-purple-500 rounded-md hover:bg-purple-400"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center gap-2 text-sm">
          <p className="">Already have an accocunt?</p>
          <Link to="/login" className="underline text-purple-500">
            Login
          </Link>
        </div>
      </div>

      {/* <div></div> */}
    </div>
  )
}

export default Register
