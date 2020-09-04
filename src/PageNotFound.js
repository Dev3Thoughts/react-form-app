import React from "react"
import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <div className="m-4 p-4">
      <h1>Page not found 404:</h1>
      <Link to="/" className="text-success">
        &#8592; Go Back to home page{" "}
      </Link>
    </div>
  )
}
