import React from 'react'

interface HeaderBoxProps {
  type?: string
  title?: string
  user?: string
  subtext?: string
}

const HeaderBox = ({ type, title, user, subtext }: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          {title}
          {type === 'greeting' && (
            <span className="text-primary">&nbsp;{user}</span>
          )}
        </h1>
      )}
      <p className="text-sm md:text-base text-muted-foreground max-w-prose">{subtext}</p>
    </div>
  )
}

export default HeaderBox
