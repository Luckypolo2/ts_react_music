import React from 'react'

interface IProps {
  children?: React.ReactNode
}

const Artist: React.FC<IProps> = () => {
  return <div></div>
}

export default React.memo(Artist)
