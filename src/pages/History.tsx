import React from 'react'
import { loadHistory } from '../services/historyService'

export default function History(){
  const items = loadHistory()
  return (
    <div className="container">
      <div className="header">
        <div className="logo">PP</div>
        <div className="title">
          <div className="app-name">HISTORY</div>
          <div className="app-sub">Last signals</div>
        </div>
      </div>

      <div className="card">
        {items.length===0 && <div className="small-muted">No history yet</div>}
        <div style={{display:'flex',flexDirection:'column',gap:8,marginTop:8}}>
          {items.map((it,idx)=> (
            <div key={idx} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:8,borderRadius:10,background:'rgba(255,255,255,0.01)'}}>
              <div>
                <div style={{fontWeight:800}}>{it.pair}</div>
                <div className="small-muted" style={{fontSize:12}}>{new Date(it.timestamp).toLocaleString()}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontWeight:900,color: it.signal==='UP'? 'var(--neon-green)': it.signal==='DOWN'? 'var(--neon-pink)': 'var(--muted)'}}>{it.signal}</div>
                <div className="small-muted">{it.expiry}s • {it.confidence}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
