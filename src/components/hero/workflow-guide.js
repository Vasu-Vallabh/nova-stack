import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Code2, GitBranch, Layout, Terminal, Server, Box } from 'lucide-react'
import { Button } from '../ui/button'
const workflowSteps = [
  {
    icon: Terminal,
    title: '1. Clone & Configure',
    description: 'npx degit Vasu-Vallabh/nova-stack my-app',
    commands: ['npm install', 'npm run dev'],
    color: 'from-blue-400 to-indigo-400',
  },
  {
    icon: Layout,
    title: '2. Build Components',
    description: 'Use pre-built shadcn/ui components or create custom ones',
    tip: 'Check /src/components/ui for examples',
    color: 'from-indigo-400 to-purple-400',
  },
  {
    icon: Code2,
    title: '3. Add Features',
    description: 'TypeScript and React Query ready to use',
    tip: 'Built-in hooks in /src/hooks',
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: GitBranch,
    title: '4. Version Control',
    description: 'Husky hooks ensure code quality on commit',
    tip: 'ESLint and Prettier run automatically',
    color: 'from-pink-400 to-rose-400',
  },
  {
    icon: Server,
    title: '5. Test & Build',
    description: 'npm run build creates optimized production bundle',
    commands: ['npm run typecheck', 'npm run build'],
    color: 'from-rose-400 to-orange-400',
  },
  {
    icon: Box,
    title: '6. Deploy',
    description: 'Ready for Cloudflare Pages or Vercel',
    tip: 'Zero-config deployment supported',
    color: 'from-orange-400 to-amber-400',
  },
]
export const WorkflowGuide = () => {
  return _jsx('section', {
    className: 'relative w-full py-16 md:py-24',
    id: 'features',
    children: _jsx('div', {
      className: 'container px-4 md:px-6',
      children: _jsxs('div', {
        className: 'flex flex-col items-center space-y-4 text-center',
        children: [
          _jsxs('div', {
            className: 'space-y-2',
            children: [
              _jsx('h2', {
                className:
                  'bg-gradient-to-r from-white to-gray-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl',
                children: 'Start Building in Minutes',
              }),
              _jsx('p', {
                className: 'mx-auto max-w-[700px] text-gray-200 md:text-lg lg:text-xl',
                children: 'Follow our streamlined workflow to go from idea to production-ready app',
              }),
            ],
          }),
          _jsx('div', {
            className: 'mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
            children: workflowSteps.map((step) =>
              _jsxs(
                'div',
                {
                  className:
                    'group relative rounded-2xl bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10',
                  children: [
                    _jsx('div', {
                      className: `mb-4 w-fit rounded-xl bg-gradient-to-r ${step.color} p-3`,
                      children: _jsx(step.icon, { size: 24, className: 'text-white' }),
                    }),
                    _jsx('h3', { className: 'mb-2 text-xl font-bold text-white', children: step.title }),
                    _jsx('p', { className: 'mb-3 text-sm text-gray-300', children: step.description }),
                    step.commands &&
                      _jsx('div', {
                        className: 'mt-4 overflow-hidden rounded bg-black/30 p-2',
                        children: step.commands.map((cmd, i) =>
                          _jsxs(
                            'code',
                            { className: 'block font-mono text-xs text-emerald-400', children: ['$ ', cmd] },
                            i,
                          ),
                        ),
                      }),
                    step.tip &&
                      _jsxs('p', {
                        className: 'mt-2 text-xs text-gray-400',
                        children: [
                          _jsx('span', { className: 'font-semibold text-gray-300', children: 'Pro tip:' }),
                          ' ',
                          step.tip,
                        ],
                      }),
                  ],
                },
                step.title,
              ),
            ),
          }),
          _jsx('div', {
            className: 'mt-16',
            children: _jsx(Button, {
              className:
                'group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl',
              size: 'lg',
              asChild: true,
              children: _jsx('a', {
                href: 'https://github.com/Vasu-Vallabh/nova-stack#run',
                className: 'flex items-center gap-2',
                children: 'View Full Documentation',
              }),
            }),
          }),
        ],
      }),
    }),
  })
}
//# sourceMappingURL=workflow-guide.js.map
