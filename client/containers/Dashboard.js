import React, { Component } from 'react'
import { connect } from 'react-redux'
import { create } from 'guid'
import Modal from 'boron/FlyModal'
import CSSModules from 'react-css-modules'

import { clearSymbolInput, getStockQuote, getSymbolInput } from '../actions/stockActions'
import { stockAction } from '../actions/portfolioActions'
import { getUserDashboard, logoutUser } from '../actions/userActions'

import { checkSymbolDuplicates } from '../utils/utils'

import NavTab from '../atoms/NavTab'
import Portfolio from '../components/Portfolio'
import PortfolioSummary from '../components/PortfolioSummary'
import PreviousTrades from '../components/PreviousTrades'
import StockForm from '../components/StockForm'
import StockOptions from '../components/StockOptions'
import StockDetails from '../components/StockDetails'
import StockNotFound from '../components/StockNotFound'
import Watchlist from '../components/Watchlist'

import Style from '../styles/containers/Dashboard'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stock: {},
      stockSymbol: '',
      shares: 0,
      view: 'portfolio'
    }
  }
  componentDidMount() {
    const { getUserDashboard } = this.props
    getUserDashboard()
  }
  handleSharesChange = (e) => {
    this.setState({ shares: e.target.value })
  }
  handleSymbolChange = (e) => {
    const { clearSymbolInput, getSymbolInput } = this.props
    const symbol = e.target.value.toUpperCase()
    e.target.value.length > 1 ? getSymbolInput(symbol) : clearSymbolInput()
    this.setState({ stockSymbol: symbol })
  }
  handleStockClick = (stockID) => {
    const { stocks } = this.props
    const stock = stocks.filter(s => s.id === stockID)
    this.setState({ stock: stock[0] })
    this.refs.modal.show()
  }
  handleResultClick = (e) => {
    const { clearSymbolInput, getStockQuote } = this.props
    this.setState({ stockSymbol: '' })
    getStockQuote(e.target.name)
    clearSymbolInput()
  }
  handleSubmit = (e) => {
    const { stockSymbol } = this.state
    const { getStockQuote } = this.props
    e.preventDefault()

    getStockQuote(stockSymbol)
    this.setState({
      stockSymbol: '',
      stock: {},
      shares: 0
    })
  }
  handleStockAction = (action) => {
    const { clearSymbolInput, quoteData, stockAction, watchlist } = this.props
    const { stock, shares } = this.state
    const { LastPrice, Name, Symbol } = quoteData
    const isDuplicate = checkSymbolDuplicates(Symbol, watchlist)
    let stockOrder = stock.symbol ? { ...stock, shares } : { shares, company: Name, symbol: Symbol }

    if (shares < 1 && action !== 'watch' && action !== 'sell_all')
      return alert('Must buy/sell at least one share')

    if (action === 'watch' && isDuplicate)
      return alert('You already have this on your watchlist!')

    if (action === 'sell_all')
      stockOrder = { ...stockOrder, shares: this.state.stock.shares }

    stockAction(action !== 'sell_all' ? action : 'sell', stockOrder)
    clearSymbolInput()
    this.setState({ stock: {}, shares: 0, })
    this.refs.modal.hide()
  }
  render() {
    const { stockSymbol, shares, stock, view } = this.state
    const { isFetching, inputResults, loggedIn, portfolioData,
      stocks, watchlist, trades, quoteData } = this.props
    const tabValues = ['trades', 'portfolio', 'watchlist']

    return (
      <div className='container'>
        <div className='center'>
          <StockForm onSubmit={this.handleSubmit}
            onChange={this.handleSymbolChange} onClick={this.handleResultClick}
            results={inputResults} value={stockSymbol} />
          {
            isFetching && quoteData ? '' : (quoteData.Message || !quoteData ? <StockNotFound />
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
          ? <Portfolio summary={portfolioData} data={stocks}
              onClick={this.handleStockClick} trades={trades.length} />
          : (view === 'trades' ? <PreviousTrades data={trades} />
          : <Watchlist data={watchlist} />)
        }
        <Modal ref='modal'>
          <StockOptions onClick={this.handleStockAction}
            onChange={this.handleSharesChange} {...stock} />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { portfolioData, watchlistData } = state.user
  const { inputResults, quoteData } = state.stock
  const { isFetching, stocks, watchlist, trades } = state.portfolio
  return { isFetching, inputResults, portfolioData, watchlistData,
    stocks, watchlist, trades, quoteData }
}

export default connect(mapStateToProps, {
  clearSymbolInput,
  getStockQuote,
  getSymbolInput,
  getUserDashboard,
  logoutUser,
  stockAction
})(CSSModules(Dashboard, Style))
