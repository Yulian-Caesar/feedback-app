import React from 'react'

type HeaderProps = {
    text?: string
}

export const Header = ({text = 'Default value'} : HeaderProps) => {
  return (
    <header>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}
