import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Countdown from '../components/Countdown'
import NeonButton from '../components/NeonButton'

export default function Result(){
  const loc:any = useLocation()
  const navigate = useNavigate()
  const {result, expirySeconds} = loc.state || {}
  const [show, setShow] = useState(false)

  useEffect(()=>{
    if(!result) navigate('/')
    else setShow(true)
  },[])

  if(!result) return null

  const onFinishCountdown = ()=>{
    // after countdown, nothing (result already shown)
  }

  const onNew = ()=>{
    // go back to home keeping selection
    navigate('/')
  }

  return (
    <div className="container">
      <div className="header">
        <div className="logo">PP</div>
        <div className="title">
          <div className="app-name">SIGNAL RESULT</div>
          <div className="app-sub">{result.pair}</div>
        </div>
      </div>

      <div className="card center">
        <div style={{width:'100%',textAlign:'center'}}>
          <div style={{fontSize:42,fontWeight:900,color: result.signal==='UP'? 'var(--neon-green)': result.signal==='DOWN'? 'var(--neon-pink)': 'var(--muted)'}}>
            {result.signal==='UP'? '⬆ UP': result.signal==='DOWN'? '⬇ DOWN': '— NO SIGNAL'}
          </div>

          <div style={{marginTop:12,display:'flex',gap:8,justifyContent:'center'}}>
            <div className="card" style={{minWidth:120}}>
              <div className="small-muted">PAIR</div>
              <div style={{fontWeight:800}}>{result.pair}</div>
            </div>
            <div className="card" style={{minWidth:120}}>
              <div className="small-muted">EXPIRY</div>
              <div style={{fontWeight:800}}>{Math.floor((expirySeconds||10))}{(expirySeconds||10)>59? 's':''} </div>
            </div>
            <div className="card" style={{minWidth:120}}>
              <div className="small-muted">CONFIDENCE</div>
              <div style={{fontWeight:800}}>{result.confidence}%</div>
            </div>
          </div>

          <div style={{marginTop:16}}>
            <Countdown seconds={expirySeconds||10} onFinish={onFinishCountdown} />
          </div>

          <div style={{marginTop:14}}>
            <NeonButton onClick={onNew}>⚡ NEW SIGNAL</NeonButton>
          </div>
        </div>
      </div>
    </div>
  )
}
