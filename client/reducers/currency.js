const initialState = {
  quoteData: {}
}

const currency = (state = initialState, action) => {
  if (action.error) return ({ ...state, error: action.error })

  switch (action.type) {
    case 'GET_CURRENCY_RATES':
      return { ...state, quoteData: action.payload }
    default:
      return state
  }
}

export default currency
