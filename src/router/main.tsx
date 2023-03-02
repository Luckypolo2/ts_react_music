import React from 'react'
import type { RouteObject } from 'react-router-dom'
// import Discover from '@/views/discover/discover'
import { Navigate } from 'react-router-dom'
// import Mine from '@/views/mine/mine'
// import Focus from '@/views/focus/focus'
// import Download from '@/views/download/download'

// 路由懒加载
const Discover = React.lazy(() => import('@/views/discover/discover'))
const Mine = React.lazy(() => import('@/views/mine/mine'))
const Focus = React.lazy(() => import('@/views/focus/focus'))
const Download = React.lazy(() => import('@/views/download/download'))
const Ranking = React.lazy(
  () => import('@/views/discover/c-views/ranking/ranking')
)
const Songs = React.lazy(() => import('@/views/discover/c-views/songs/songs'))
const DjRadio = React.lazy(
  () => import('@/views/discover/c-views/djradio/djradio')
)
const Artist = React.lazy(
  () => import('@/views/discover/c-views/artist/artist')
)
const Album = React.lazy(() => import('@/views/discover/c-views/album/album'))
const Recommend = React.lazy(
  () => import('@/views/discover/c-views/recommend/recommend')
)
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'} />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <DjRadio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]
export default routes
