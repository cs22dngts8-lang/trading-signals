import { SignalResult } from '../engine/analysisEngine'

const HISTORY_KEY = 'profitpro_history_v1'

export function loadHistory(): SignalResult[]{
  try{
    const raw = localStorage.getItem(HISTORY_KEY)
    if(!raw) return []
    return JSON.parse(raw) as SignalResult[]
  }catch(e){
    return []
  }
}

export function saveHistory(item: SignalResult){
  const arr = loadHistory()
  arr.unshift(item)
  // keep last 100
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr.slice(0,100)))
}

