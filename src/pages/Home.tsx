import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PairSelector from '../components/PairSelector'
import ExpirySelector from '../components/ExpirySelector'
import NeonButton from '../components/NeonButton'

const PAIRS = [
  'EUR/USD','GBP/USD','USD/JPY','USD/CHF','AUD/USD','USD/CAD','NZD/USD',
  'EUR/GBP','EUR/JPY','EUR/CHF','EUR/AUD','EUR/CAD','EUR/NZD',
  'GBP/JPY','GBP/CHF','GBP/AUD','GBP/CAD','AUD/JPY','AUD/CAD','AUD/CHF','AUD/NZD','CAD/JPY','CHF/JPY','NZD/JPY','NZD/CAD','NZD/CHF'
]
const EXP = ['3s','5s','10s','15s','30s','1m','2m','3m','4m','5m']

function toSeconds(e:string){
  if(e.endsWith('s')) return parseInt(e.replace('s',''))
  if(e.endsWith('m')) return parseInt(e.replace('m',''))*60
  return 30
}

export default function Home(){
  const [pair,setPair] = useState(PAIRS[0])
  const [expiry,setExpiry] = useState('10s')
  const navigate = useNavigate()

  useEffect(()=>{
    // preserve selection in session storage
    const p = sessionStorage.getItem('pp_pair')
    const e = sessionStorage.getItem('pp_expiry')
    if(p) setPair(p)
    if(e) setExpiry(e)
  },[])
  useEffect(()=>{sessionStorage.setItem('pp_pair',pair)},[pair])
  useEffect(()=>{sessionStorage.setItem('pp_expiry',expiry)},[expiry])

  const onGenerate = ()=>{
    // navigate to generating with state
    navigate('/generating', {state:{pair,expiry,expirySeconds:toSeconds(expiry)}})
  }

  return (
    <div className="container">
      <div className="header">
        <div className="logo">PP</div>
        <div className="title">
          <div className="app-name">PROFIT <span style={{color:'var(--neon-green)'}}>PRO</span></div>
          <div className="app-sub">AI Trading Signals</div>
        </div>
      </div>

      <div className="card">
        <div className="small-muted">PAIR</div>
        <PairSelector pairs={PAIRS} value={pair} onChange={setPair} />

        <div style={{height:10}} />
        <div className="small-muted">EXPIRY</div>
        <ExpirySelector options={EXP} value={expiry} onChange={setExpiry} />

        <NeonButton onClick={onGenerate} style={{marginTop:14}}>⚡ GENERATE SIGNAL</NeonButton>
      </div>

      <div style={{height:12}} />
      <div style={{display:'flex',gap:8}}>
        <a href="/history" style={{color:'var(--neon-cyan)',fontWeight:700}} className="small-muted">History</a>
      </div>
    </div>
  )
}
