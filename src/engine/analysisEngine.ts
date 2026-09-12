export type Signal = 'UP'|'DOWN'|'NO_SIGNAL'

export type SignalResult = {
  pair:string
  expiry:string
  signal:Signal
  confidence:number
  timestamp:number
}

// Simple deterministic-ish analysis engine (mock). Replace with real engine in /engine.
export function analyzeMarket(pair:string, expirySeconds:number): SignalResult{
  // create a simple hash based on pair and expiry + current minute
  const s = pair+"|"+expirySeconds
  let h = 0
  for(let i=0;i<s.length;i++) h = ((h<<5)-h)+s.charCodeAt(i)
  h = Math.abs(h)
  const conf = 50 + (h % 51) // 50..100
  const signalPick = h % 3
  const signal: Signal = signalPick===0? 'UP': signalPick===1? 'DOWN':'NO_SIGNAL'
  return {pair, expiry: String(expirySeconds), signal, confidence: conf, timestamp: Date.now()}
}
