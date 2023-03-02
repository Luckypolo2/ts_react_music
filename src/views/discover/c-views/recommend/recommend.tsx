import React, { useEffect } from 'react'
import { useAppDispatch } from '@/store/store'
import { fetchBannersAction } from '@/views/discover/c-views/recommend/store/recommendStore'
import TopBanner from '@/views/discover/c-views/recommend/c-cpns/top-banner/TopBanner'

interface IProps {
  children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log('Recommend useEffect')
    dispatch(fetchBannersAction())
  }, [])
  return (
    <div>
      <TopBanner />
      Recommend
    </div>
  )
}

export default React.memo(Recommend)
