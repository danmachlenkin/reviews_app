import React from 'react'

function Header({bgColor,textColor}) {
 const styleApplied = {
    backgroundColor: bgColor,
    color: textColor
 }

  return (
    <header style={styleApplied}>
        <div className='container'>
        <h1 >FeedBack UI</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text:"FeedBack UI",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

export default Header
