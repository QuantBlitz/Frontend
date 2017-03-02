export const formatIntCommas = amount => amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export const formatEachWord = string => string.replace(/\\b([a-z])/g, x => x.toUpperCase())

export const checkSymbolDuplicates = (symbol, list) => list.some(item => item.symbol === symbol)
