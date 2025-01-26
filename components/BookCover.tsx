import React from 'react'

interface Props { 
  variant: 'wide' | 'small',
  coverColor: string,
  coverUrl: string,
  className?: string
}

const BookCover = (
  {
    variant,
    coverColor,
    coverUrl,
    className
  } : Props
) => {
  return (
    <div>BookCover</div>
  )
}

export default BookCover