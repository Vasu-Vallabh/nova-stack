import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'
export function Header() {
  return _jsx('header', {
    className: 'fixed left-0 top-0 z-50 w-full backdrop-blur-md',
    children: _jsxs('nav', {
      className: 'mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8',
      role: 'navigation',
      children: [
        _jsx('a', {
          href: '/',
          className: 'flex items-center space-x-2',
          'aria-label': 'Home',
          children: _jsx('span', {
            className: 'bg-gradient-to-r from-white to-purple-200 bg-clip-text text-xl font-bold text-transparent',
            children: 'Nova Stack',
          }),
        }),
        _jsx('div', {
          className: 'flex items-center gap-6',
          children: _jsx(Button, {
            size: 'icon',
            variant: 'ghost',
            className: 'rounded-full hover:bg-white/10',
            asChild: true,
            children: _jsx('a', {
              href: 'https://github.com/Vasu-Vallabh/nova-stack',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-white',
              'aria-label': 'View on GitHub',
              children: _jsx(Github, { 'aria-hidden': 'true' }),
            }),
          }),
        }),
      ],
    }),
  })
}
//# sourceMappingURL=index.js.map
