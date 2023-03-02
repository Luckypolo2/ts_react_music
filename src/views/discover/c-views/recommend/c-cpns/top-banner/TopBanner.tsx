import React from 'react'
import { Carousel } from 'antd'
import {
  BannerControl,
  BannerLeft,
  BannerRight,
  TopBannerWrapper
} from '@/views/discover/c-views/recommend/c-cpns/top-banner/style'
import { useAppSelector } from '@/store/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: React.ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  return (
    <TopBannerWrapper>
      <BannerLeft>
        <div className="banner wrap-v2">
          <Carousel className="carousel" effect="fade" autoplay>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </div>
      </BannerLeft>
      <BannerRight>
        <div className="download-image"></div>
        <p className="img-down-p">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </BannerRight>
      <BannerControl></BannerControl>
    </TopBannerWrapper>
  )
}

export default React.memo(TopBanner)
