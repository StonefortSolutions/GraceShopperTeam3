import React from "react"
import { useSelector } from "react-redux"
import { Link, Outlet, NavLink } from "react-router-dom"

const AdminPage = () => {
  const { auth } = useSelector((state) => state)

  if (!auth.isAdmin) {
    return (
      <div className="drawer-content flex flex-col items-center ">
        <h1>Not Authorized</h1>
      </div>
    )
  }
  return (
    <div className="">
      <div className="drawer md:drawer-open">
        <input id="adminSidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="adminSidebar"
            className="btn-primary drawer-button btn md:hidden"
          >
            Sidebar Toggle
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="adminSidebar" className="drawer-overlay"></label>
          <ul className="menu h-full w-40 bg-base-300 p-4 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/orders"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/reviews"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
