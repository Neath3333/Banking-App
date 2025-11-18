import React from 'react'

interface HeaderBoxProps {
  type?: string
  title?: string
  user?: string
  subtext?: string
}

const HeaderBox = ({ type, title, user, subtext }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      {title && <h1 className="header-title">{title}{type === 'greeting' && (
        <span className="text-[#0179FE]">
          &nbsp;{user}
        </span>
      )}</h1>}
      <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox