import React from 'react'
import Provider from './context/Provider'
import AppRoutes from './routes/Router'


function App() {


  return (
    <Provider>
      <AppRoutes></AppRoutes>
    </Provider>

  )
}

export default App
