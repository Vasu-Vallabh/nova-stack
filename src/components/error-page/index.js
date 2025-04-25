import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime'
import { Link, useRouteError } from 'react-router-dom'
import { Button } from '../ui/button'
import { SEO } from '../seo'
export default function ErrorPage() {
  const error = useRouteError()
  return _jsxs(_Fragment, {
    children: [
      _jsx(SEO, {
        title: 'Error - Nova Stack',
        description: 'An error occurred while loading this page',
        noindex: true,
      }),
      _jsx('main', {
        className: 'flex h-screen w-full flex-col items-center justify-center gap-4 text-left',
        children: _jsxs('article', {
          children: [
            _jsx('h1', { className: 'mb-4 text-2xl font-bold', children: 'Oops! Something went wrong' }),
            _jsx('p', { className: 'mb-4', children: 'We encountered an error while loading this page.' }),
            _jsxs('p', {
              className: 'mb-6 font-mono',
              children: [
                _jsx('span', { className: 'mr-2', children: error?.status }),
                _jsx('i', { children: error?.statusText || error?.message }),
              ],
            }),
            _jsx(Button, { asChild: true, children: _jsx(Link, { to: '/', children: 'Back to Homepage' }) }),
          ],
        }),
      }),
    ],
  })
}
//# sourceMappingURL=index.js.map
