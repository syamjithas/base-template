import './App.css'

import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { Home, Login, Payment, SignUp } from '../'

const RouterEle = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'Payment',
          element: <Payment />
        },
        { path: 'SignUp', element: < SignUp /> }
      ]
    },
    { path: 'team', element: <Login /> }
  ])

  return routes
}
const App = () => {
  return (
    <Router>
      <RouterEle />
    </Router>
  )
}

export default App
