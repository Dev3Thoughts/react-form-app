import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"

const Loader = () => {
    return (
        <div>
            <ClipLoader
                sizeUnit={"px"}
                size={150}
                color={'#DF691A'}
                loading={true}
            />
        </div>
    )
}

export default Loader