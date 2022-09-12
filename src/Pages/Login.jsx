import React from "react"
import { Link } from "react-router-dom"
import Google from "../Assets/google.png"

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-purple-400">
      <div className="flex flex-col items-center gap-6 bg-white py-9 px-9 rounded-xl md:px-20">
        <div className="flex items-center justify-center gap-3 border border-gray-200 py-3 px-4 rounded-lg ring-1 cursor-pointer w-72">
          <img
            className="w-6 h-6 object-contain"
            src={Google}
            alt="Login with Google"
          />
          <p className="font-bold">Login with Google</p>
        </div>

        <p>OR</p>

        <form className="flex flex-col ic w-full">
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

          <button
            className="text-white font-semibold py-2 mt-6 bg-purple-500 rounded-md hover:bg-purple-400"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-2 text-sm">
          <p className="">Don't have an accocunt?</p>
          <Link to="/register" className="underline text-purple-500">
            Register
          </Link>
        </div>
      </div>

      {/* <div></div> */}
    </div>
  )
}

export default Login
