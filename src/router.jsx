import { createBrowserRouter } from 'react-router-dom'

import Users from '@pages/Users'
import Complaint from '@pages/Complaint'
import CreateComplaint from '@pages/CreateComplaint'

const router = createBrowserRouter([
  { path: '/', element: <Complaint /> },
  { path: '/registrar-denuncia', element: <CreateComplaint /> },
  { path: '/users', element: <Users /> }
])

export default router
