import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img 
      src="/Logo.png" 
      alt="App Logo" 
      className="w-20 h-20"
    />
    </div>
  )
}

export default Logo
