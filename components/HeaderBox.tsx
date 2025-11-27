import React from 'react'

interface HeaderBoxProps {
  type?: string
  title?: string
  user?: string
  subtext?: string
}

const HeaderBox = ({ type, title, user, subtext }: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      {title && (
        <div className="flex items-baseline flex-wrap gap-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            {title}
            {type === 'greeting' && (
              <span className="text-gradient-primary ml-2">{user}</span>
            )}
          </h1>
          {type === 'greeting' && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Welcome back
            </div>
          )}
        </div>
      )}
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">{subtext}</p>
    </div>
  )
}

export default HeaderBox
