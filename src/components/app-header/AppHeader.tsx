import React from 'react'
import {
  HeaderLeft,
  HeaderRight,
  HeaderWrapper
} from '@/components/app-header/style'
import HeaderTitles from '@/assets/data/header-titles.json'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface IProps {
  children?: React.ReactNode
}
interface IItem {
  title: string
  link: string
  type: string
}

const AppHeader: React.FC<IProps> = () => {
  function showItem(item: IItem) {
    // NavLink 默认添加active类名激活状态
    if (item.type === 'path') {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      {/*头部主体部分*/}
      <div className="content">
        {/*头部主体左侧*/}
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {HeaderTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        {/*头部主体右侧*/}
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      {/*分割线*/}
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default React.memo(AppHeader)
