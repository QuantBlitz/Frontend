export const formatIntCommas = amount => amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export const formatEachWord = string => string.replace(/\\b([a-z])/g, x => x.toUpperCase())

export const checkSymbolDuplicates = (symbol, list) => list.some(item => item.symbol === symbol)

export const formatDate = date => {
  const m = date.getMonth() + 1
  const d = date.getDate()
  const month = m + 1 < 10 ? `0${m}` : `${m}`
  const day = d < 10 ? `0${d}` : `${d}`
  return `${date.getFullYear()}-${month}-${day}`
}

export const validUsername = username => username.match(/^[a-zA-Z0-9]+$/)
