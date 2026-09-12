import React from 'react'

export function ScannerAnimation(){
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
      <div style={{width:220,height:220,borderRadius:120,position:'relative',background:'radial-gradient(circle at 30% 30%, rgba(140,60,255,0.08), transparent)'}}>
        <div style={{position:'absolute',inset:12,borderRadius:120,boxShadow:'0 0 60px rgba(138,60,255,0.08), inset 0 0 30px rgba(0,240,255,0.04)'}} />
        <svg viewBox="0 0 200 200" style={{width:200,height:200}}>
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#ff3bd1" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="70" stroke="url(#g1)" strokeWidth="2" fill="none" strokeOpacity="0.9" />
          <circle cx="100" cy="100" r="90" stroke="#6b21a8" strokeWidth="1" fill="none" strokeOpacity="0.12" />
        </svg>
      </div>
    </div>
  )
}

export default ScannerAnimation
