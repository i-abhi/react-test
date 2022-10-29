import React from 'react'

const Loader = () => {
  return (
    <>
    <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    </>
  )
}

export default Loader