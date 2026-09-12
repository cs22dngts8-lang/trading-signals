import React, {useEffect, useState} from 'react'

export function Countdown({seconds,onFinish}:{seconds:number,onFinish:()=>void}){
  const [t,setT] = useState(seconds)
  useEffect(()=>{
    setT(seconds)
    const id = setInterval(()=>{
      setT(s=>{
        if(s<=1){
          clearInterval(id)
          onFinish()
          return 0
        }
        return s-1
      })
    },1000)
    return ()=> clearInterval(id)
  },[seconds])

  const mm = Math.floor(t/60).toString().padStart(2,'0')
  const ss = (t%60).toString().padStart(2,'0')
  return (
    <div style={{fontSize:36,fontWeight:800,color:'var(--neon-cyan)'}}>{mm}:{ss}</div>
  )
}

export default Countdown
