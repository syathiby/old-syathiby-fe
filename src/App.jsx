// React
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Css
import './assets/tailwind.css'
import AppRoute from './router/Routes'

function App() {

  return (
    <Router>
      <Suspense fallback={null}>
        <AppRoute />
      </Suspense>
    </Router>
  )

}

export default App