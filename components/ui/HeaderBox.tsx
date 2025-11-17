import React from 'react'

interface HeaderBoxProps {
  type?: string
  title?: string
  user?: string
  subject?: string
}

const HeaderBox = ({ type, title, user, subject }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      {title && <h1 className="header-title">{title}</h1>}
      {user && type && <p className="header-greeting">{type}{user}</p>}
      {subject && <p className="header-subject">{subject}</p>}
    </div>
  )
}

export default HeaderBox