import React from 'react'

export const PairSelector: React.FC<{pairs:string[], value:string, onChange:(p:string)=>void}> = ({pairs,value,onChange})=>{
  return (
    <div className="pair-list">
      {pairs.map(p=> (
        <button key={p} className={`pair-btn ${value===p? 'selected':''}`} onClick={()=>onChange(p)}>{p}</button>
      ))}
    </div>
  )
}

export default PairSelector
