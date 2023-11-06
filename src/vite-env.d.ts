/// <reference types="vite/client" />
import React from 'react'

interface IconParkIconElement extends HTMLElement {
  // 包含打包的图标id
  'icon-id'?: '57' | '58' | '59' | '61' | '62' | '63'
  // 包含打包的图标标识
  name?: 'icon-name1' | 'icon-name2' | 'icon-name3' | 'icon-name4'
  size?: string
  width?: string
  height?: string
  color?: string
  stroke?: string
  fill?: string
  rtl?: string
  spin?: string
}
declare global {
  interface IconParkIconAttributes<T> extends React.HTMLAttributes<T> {
    // 包含打包的图标id
    'icon-id'?: '57' | '58' | '59' | '61' | '62' | '63'
    // 包含打包的图标标识
    name?: string
    size?: string
    width?: string
    height?: string
    color?: string
    stroke?: string
    fill?: string
    rtl?: string
    spin?: string
  }
  namespace JSX {
    interface IntrinsicElements {
      'iconpark-icon': React.DetailedHTMLProps<
        IconParkIconAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}
