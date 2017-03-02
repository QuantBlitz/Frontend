import React, { PropTypes } from 'react'

const IconBlock = (props) => {
  return (
    <div className='col s12 m4'>
      <div className='icon-block'>
        <h2 className='center blue-grey-text text-darken-2'>
          <i className='material-icons medium'>{ props.icon }</i>
        </h2>
        <h5 className='center'>{ props.center_text }</h5>
        <p className='light'>
          { props.block_text }
        </p>
      </div>
    </div>
  )
}

IconBlock.propTypes = {
  icon: PropTypes.string.isRequired,
  block_text: PropTypes.string.isRequired,
  center_text: PropTypes.string.isRequired
}

export default IconBlock
