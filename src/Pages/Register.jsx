import React, { useState } from "react"
import Google from "../Assets/google.png"
import Gallery from "../Assets/gallery.png"
import { Link, useNavigate } from "react-router-dom"

// firebase functions
import { auth, db, storage } from "../firebase.config"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"

const Register = () => {
  const [values, setValues] = useState({
    name: null,
    email: null,
    password: null,
  })
  const [img, setImg] = useState(null)
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const fileHandler = (e) => {
    const profileImage = e.target.files[0]
    setImg(profileImage)
  }

  const Register = async (e) => {
    e.preventDefault()
    const { name, email, password } = values

    if (!name || !email || !password || !img) {
      setError(true)
      setTimeout(() => setError(false), 3000)
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        // console.log(res)
        const storageRef = ref(storage, `profiles/${name}`)
        const uploadTask = uploadBytesResumable(storageRef, img)
        uploadTask.on(
          (error) => {
            setError(true)
            console.log(error)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then(async (downloadURL) => {
                await updateProfile(res.user, {
                  displayName: name,
                  photoURL: downloadURL,
                })

                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName: name,
                  email: email,
                  photoURL: downloadURL,
                })

                await setDoc(doc(db, "userChats", res.user.uid), {})

                navigate("/")
              })
              .catch((err) => console.log(err))
          }
        )
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-purple-400">
      <div className="flex flex-col items-center gap-6 bg-white py-9 px-9 rounded-xl md:px-20">
        {error && <p>Requireds fields can't be empty!</p>}
        {JSON.stringify({ values, img })}
        <div className="flex items-center justify-center gap-3 border border-gray-200 py-3 px-4 rounded-lg ring-1 cursor-pointer w-72">
          <img
            className="w-6 h-6 object-contain"
            src={Google}
            alt="Login with Google"
          />
          <p className="font-bold">Sign up with Google</p>
        </div>

        <p>OR</p>

        <form onSubmit={Register} className="flex flex-col ic w-full">
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="py-1 outline-none border-b border-b-gray-500"
            type="text"
            id="name"
            name="name"
            onChange={changeHandler}
            values={values.email}
          />
          <br />

          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="py-1 outline-none border-b border-b-gray-500"
            type="email"
            id="email"
            name="email"
            onChange={changeHandler}
            values={values.email}
          />
          <br />

          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="py-1 outline-none border-b border-b-gray-500"
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
            values={values.password}
          />
          <br />

          <label
            className="flex items-center gap-2 cursor-pointer"
            htmlFor="file"
          >
            <img className="w-8" src={Gallery} alt="upload user profile icon" />
            <p className="text-sm text-gray-400">Choose an Avator</p>
          </label>
          <input
            onChange={fileHandler}
            className="hidden"
            type="file"
            id="file"
            accept="image/*"
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
    </div>
  )
}

export default Register
