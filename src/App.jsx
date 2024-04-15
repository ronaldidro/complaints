import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { ReadedContextProvider } from '@features/complaints'
import router from './router'

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0, refetchOnWindowFocus: false } } })

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReadedContextProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ReadedContextProvider>
    </QueryClientProvider>
  )
}

export default App
