import React, { Component } from 'react'
import { connect } from 'react-redux'
import { create } from 'guid'
import CSSModules from 'react-css-modules'

import { clearSymbolInput, getStockQuote, getSymbolInput, stockAction } from '../actions/stockActions'
import { getUserDashboard, logoutUser } from '../actions/userActions'

import { checkSymbolDuplicates } from '../utils/utils'

import NavTab from '../atoms/NavTab'
import Portfolio from '../components/Portfolio'
import PortfolioSummary from '../components/PortfolioSummary'
import PreviousTrades from '../components/PreviousTrades'
import StockForm from '../components/StockForm'
import StockDetails from '../components/StockDetails'
import StockNotFound from '../components/StockNotFound'
import Watchlist from '../components/Watchlist'

import Style from '../styles/containers/Dashboard'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stockSymbol: '',
      pItemID: null,
      shares: 0,
      view: 'portfolio'
    }
  }
  componentWillMount() {
    const { getUserDashboard } = this.props
    getUserDashboard()
  }
  handleSharesChange = (e) => {
    this.setState({ shares: e.target.value })
  }
  handleSymbolChange = (e) => {
    const { clearSymbolInput, getSymbolInput } = this.props
    this.state.stockSymbol.length > 1
    ? getSymbolInput(e.target.value.toUpperCase())
    : clearSymbolInput()
    this.setState({ stockSymbol: e.target.value.toUpperCase() })
  }
  handleHover = (id = null) => {
    this.setState({ pItemID: id })
  }
  handleResultClick = (e) => {
    const { clearSymbolInput, getStockQuote } = this.props
    this.setState({ stockSymbol: '' })
    getStockQuote(e.target.name)
  }
  handleStockAction = (action) => {
    const { clearSymbolInput, quoteData, stockAction, watchlist } = this.props
    const { shares } = this.state
    const { LastPrice, Name, Symbol } = quoteData
    const isDuplicate = checkSymbolDuplicates(Symbol, watchlist)

    if (shares < 1 && action !== 'watch')
      return alert('Must buy/sell at least one share')

    if (action === 'watch' && isDuplicate)
      return alert('You already have this on your watchlist!')

    stockAction(action, { shares, company: Name, symbol: Symbol })
    clearSymbolInput()
    this.setState({ shares: 0 })
  }
  handleSubmit = (e) => {
    const { stockSymbol } = this.state
    const { getStockQuote } = this.props
    e.preventDefault()

    getStockQuote(stockSymbol)
    this.setState({ stockSymbol: '' })
  }
  render() {
    const { pItemID, stockSymbol, shares, view } = this.state
    const { isFetching, inputResults, loggedIn, portfolioData,
      portfolio, watchlist, trades, quoteData } = this.props
    const tabValues = ['trades', 'portfolio', 'watchlist']

    return (
      <div className='container'>
        <div className='center'>
          <StockForm onSubmit={this.handleSubmit}
            onChange={this.handleSymbolChange} onClick={this.handleResultClick}
            results={inputResults} value={stockSymbol} />
          {
            isFetching ? '' : (quoteData.Message || !quoteData ? <StockNotFound />
              : <StockDetails {...quoteData} onClick={this.handleStockAction} onChange={this.handleSharesChange} value={shares} />)
          }
        </div>
        <nav className='nav-extended blue-grey lighten-5' styleName='navigation'>
          <div className='nav-wrapper container'>
            <ul className='tabs tabs-fixed-width'>
              { tabValues.map(tab => <NavTab key={create().value} name={tab}
                  onClick={(e) => this.setState({ view: e.target.name })}
                  isActive={tab === view} />) }
            </ul>
          </div>
        </nav>
        {
          view === 'portfolio'
          ? <Portfolio summary={portfolioData} data={portfolio} trades={trades.length} />
          : (view === 'trades' ? <PreviousTrades data={trades} />
          : <Watchlist data={watchlist} />)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { portfolioData, watchlistData } = state.user
  const { isFetching, inputResults, portfolio,
    watchlist, trades, quoteData } = state.stock
  return { isFetching, inputResults, portfolioData, watchlistData,
    portfolio, watchlist, trades, quoteData }
}

export default connect(mapStateToProps, {
  clearSymbolInput,
  getStockQuote,
  getSymbolInput,
  getUserDashboard,
  logoutUser,
  stockAction
})(CSSModules(Dashboard, Style))
