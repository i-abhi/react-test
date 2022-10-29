import React from 'react'

const Alert = ({type, strongText, text}) => {
  return (
    <>
        <div className={`alert alert-${type}`} role="alert">
            { strongText &&
                <strong> {strongText} </strong>
            }
            {text}
        </div>
    </>
  )
}

export default Alert