// marketAdapter: currently provides mock market data; replaceable with real API connectors
export async function fetchMarketData(pair:string){
  // stub - real implementation should call backend or market API
  return {
    pair,
    price: Math.random()*100
  }
}
