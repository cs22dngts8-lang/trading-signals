import React from 'react'

export const NeonButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children,...props})=>{
  return (
    <button {...props} className={`neon-btn ${props.className||''}`}> {children} </button>
  )
}

export default NeonButton
