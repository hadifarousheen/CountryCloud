import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import CountryDetails from './components/CountryDetails.jsx'




const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    index: true,
    path: "/",
    element: <Body />
  }, {
    path: "/country/:countryName",
    element: <CountryDetails />
  }]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>

  </StrictMode>,
)
