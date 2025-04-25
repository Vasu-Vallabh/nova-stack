import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Header } from '../header'
export const getNoneLayout = (page) => page
export const getDefaultLayout = (page) => {
  return _jsxs('div', { className: 'h-min-screen', children: [_jsx(Header, {}), page] })
}
//# sourceMappingURL=index.js.map
