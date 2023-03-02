import React from 'react'

interface IProps {
  children?: React.ReactNode
}

const AppFooter: React.FC<IProps> = () => {
  return <div>AppFooter</div>
}

export default React.memo(AppFooter)
