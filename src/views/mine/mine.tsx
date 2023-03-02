import React from 'react'

interface IProps {
  children?: React.ReactNode
}

const Mine: React.FC<IProps> = () => {
  return <div></div>
}

export default React.memo(Mine)
