import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import CountryContext from './utils/CountyContext.js'

const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    index:true,
  path:"/",
  element:<Body/>
}]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountryContext.Provider>
    <RouterProvider router={appRouter}>
    <App />
    </RouterProvider>
    </CountryContext.Provider>
  </StrictMode>,
)
