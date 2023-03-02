import styled from 'styled-components'
import DownloadImg from '@/assets/img/download.png'
export const TopBannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  .banner {
    width: 730px;
    //height: 270px;
    //display: flex;
    //position: relative;
    .carousel {
      width: 730px;
      height: 270px;
    }
  }
`
export const BannerLeft = styled.div`
  .banner-item {
    .image {
      width: 100%;
    }
  }
`
export const BannerRight = styled.div`
  .download-image {
    width: 254px;
    height: 250px;
    background: url(${DownloadImg});
  }
  .img-down-p {
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: white;
    background-color: #333333;
  }
`
export const BannerControl = styled.div``
