import { Link } from "gatsby"
import React from "react"

export default function NavLink({ to, text, additionalClasses }) {
  return (
    <li
      className={`transition-colors duration-300 hover:text-secondary ${additionalClasses}`}
    >
      <Link to={to || "/"}>{text}</Link>
    </li>
  )
}
