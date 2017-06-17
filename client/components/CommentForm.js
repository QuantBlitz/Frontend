import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/CommentForm'

const CommentForm = (props) => {
  return (
    <div className='row' styleName='root'>
      <form styleName='form' onSubmit={props.onSubmit}>
        <textarea styleName='text-area' onChange={props.onChange} />
        <button styleName='btn'>Comment</button>
      </form>
    </div>
  )
}

export default CSSModules(CommentForm, Style)
