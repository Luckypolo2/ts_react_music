import React from 'react'

interface IProps {
  children?: React.ReactNode
}

const Album: React.FC<IProps> = () => {
  return <div></div>
}

export default React.memo(Album)
