/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import * as React from 'react'
  const SVGComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default SVGComponent
}
