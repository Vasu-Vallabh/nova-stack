import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])
  return _jsxs(QueryClientProvider, {
    client: queryClient,
    children: [_jsx(RouterProvider, { router: createRouter() }), _jsx(ReactQueryDevtools, {})],
  })
}
//# sourceMappingURL=app.js.map
