import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/main'
import AppHeader from '@/components/app-header/AppHeader'
import AppFooter from '@/components/app-footer/AppFooter'

function App() {
  return (
    <div className="App">
      {/*<DemoClass name="hello" />*/}
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
