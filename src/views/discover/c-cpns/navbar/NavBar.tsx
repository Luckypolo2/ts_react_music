import React from 'react'
import { NavWrapper } from '@/views/discover/c-cpns/navbar/style'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: React.ReactNode
}

const NavBar: React.FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default React.memo(NavBar)
