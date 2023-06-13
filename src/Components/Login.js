import React, { useState } from "react"
import { attemptLogin } from "../store"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
  const { auth } = useSelector((state) => state)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value })
  }

  const login = (ev) => {
    ev.preventDefault()
    dispatch(attemptLogin(credentials))
  }
  if (!!auth.id) {
    navigate("/products")
  }
  return (
    <div className="m-auto mb-4 mt-4 flex w-1/2 justify-center rounded-xl border-2 border-secondary bg-base-200 shadow-2xl">
      <div className="card ">
        <h2 className="mb-2 mt-2 text-3xl">Login</h2>
        <form onSubmit={login} className="form-control ">
          <input
            placeholder="username"
            value={credentials.username}
            name="username"
            onChange={onChange}
            className={
              credentials.username.length > 0
                ? "input-bordered input-primary input m-1 border-2 bg-neutral text-black"
                : "input-bordered input-warning input m-1 border-2 bg-neutral text-black"
            }
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={onChange}
            className={
              credentials.password.length > 0
                ? "input-bordered input-primary input m-1 border-2 bg-neutral text-black"
                : "input-bordered input-warning input m-1 border-2 bg-neutral text-black"
            }
          />
          <button className="btn-primary btn">Login</button>
        </form>
        <Link to="/account/create" className="mb-2">
          No Account? Sign Up Here
        </Link>
      </div>
    </div>
  )
}

export default Login
