import { createBrowserRouter } from 'react-router-dom'

import Users from '@pages/Users'
import Complaint from '@pages/Complaint'

const router = createBrowserRouter([
  { path: '/', element: <Complaint /> },
  { path: '/users', element: <Users /> }
])

export default router
