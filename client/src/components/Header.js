import React from 'react'

const Header = ({storename, slogan}) => {
  return (
    <div>
        <h1> {storename} </h1>
        <h2> {slogan} </h2>
    </div>
  )
}

export default Header;