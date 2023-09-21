import React from 'react'

import "./Button.css"

const Button = (props) => {
  const {onClick} = props; 
  return (
    <div className='btn'>
        <button className="button" onClick={onClick}>{props.name}</button>
    </div>
  )
}

export default Button