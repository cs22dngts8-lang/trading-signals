import React from 'react'

export const ExpirySelector: React.FC<{options:string[], value:string, onChange:(s:string)=>void}> = ({options,value,onChange})=>{
  return (
    <div className="expiry-row">
      {options.map(o=> (
        <button key={o} className={`expiry-btn ${value===o? 'selected':''}`} onClick={()=>onChange(o)}>{o}</button>
      ))}
    </div>
  )
}

export default ExpirySelector
