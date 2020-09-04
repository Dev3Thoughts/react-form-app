import React from "react"
import ClipLoader from "react-spinners/ClipLoader"

const Loader = () => {
  return (
    <div className="container">
      <div className="row h-100 justify-content-center align-items-center">
        <ClipLoader
          sizeUnit={"px"}
          size={150}
          color={"#DF691A"}
          loading={true}
        />
      </div>
    </div>
  )
}

export default Loader
