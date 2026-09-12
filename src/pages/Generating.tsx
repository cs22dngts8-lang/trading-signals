import React, {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ScannerAnimation from '../components/ScannerAnimation'
import { analyzeMarket } from '../engine/analysisEngine'
import { saveHistory } from '../services/historyService'

export default function Generating(){
  const loc:any = useLocation()
  const navigate = useNavigate()
  const {pair, expiry, expirySeconds} = loc.state || {}

  useEffect(()=>{
    if(!pair){
      navigate('/')
      return
    }
    const timeout = setTimeout(()=>{
      const result = analyzeMarket(pair, expirySeconds||10)
      saveHistory(result)
      // pass result in navigation state
      navigate('/result',{state:{result,expiry,expirySeconds}})
    }, 1000 + 1000) // small delay to show animation
    return ()=> clearTimeout(timeout)
  },[])

  return (
    <div className="container">
      <div className="header">
        <div className="logo">PP</div>
        <div className="title">
          <div className="app-name">GENERATING</div>
          <div className="app-sub">Please wait while our AI analyzes the market</div>
        </div>
      </div>

      <div className="card center">
        <div style={{width:'100%'}}>
          <div style={{textAlign:'center',fontWeight:900,fontSize:18,marginBottom:8}}>⚡ GENERATING SIGNALS</div>
          <div style={{textAlign:'center',color:'var(--small-muted)'}}>Pair: {pair} • {expiry}</div>
          <ScannerAnimation />
        </div>
      </div>
    </div>
  )
}
