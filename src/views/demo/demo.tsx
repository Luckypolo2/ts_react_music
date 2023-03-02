import React from 'react'

interface IProps {
  children: React.ReactNode
}
const Demo: React.FC<IProps> = () => {
  return <div>Template</div>
}

export default React.memo(Demo)
