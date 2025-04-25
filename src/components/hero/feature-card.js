import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export const FeatureCard = ({ icon: Icon, title, description, gradientFrom, gradientTo, commands, tip }) => {
  return _jsxs('div', {
    className: 'group relative rounded-2xl bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10',
    children: [
      _jsx('div', {
        className: `mb-4 w-fit rounded-xl bg-gradient-to-br from-${gradientFrom} to-${gradientTo} p-3`,
        children: _jsx(Icon, { size: 24, className: 'text-white' }),
      }),
      _jsx('h3', { className: 'mb-2 text-xl font-bold text-white', children: title }),
      _jsx('p', { className: 'mb-3 text-sm text-gray-300', children: description }),
      commands &&
        _jsx('div', {
          className: 'mt-4 overflow-hidden rounded bg-black/30 p-2',
          children: commands.map((cmd, i) =>
            _jsxs('code', { className: 'block font-mono text-xs text-emerald-400', children: ['$ ', cmd] }, i),
          ),
        }),
      tip &&
        _jsxs('p', {
          className: 'mt-2 text-xs text-gray-400',
          children: [_jsx('span', { className: 'font-semibold text-gray-300', children: 'Pro tip:' }), ' ', tip],
        }),
    ],
  })
}
//# sourceMappingURL=feature-card.js.map
