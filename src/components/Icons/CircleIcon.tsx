import * as React from "react"

type Props = {
    strokeSize?: number,
    strokeColor?: string
}

const CircleIcon = ({ strokeSize = 3, strokeColor='#000000'}:Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 30 30"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
  >
    <image
      width={1920}
      height={867}

      transform="translate(2536.425 -1023.65)"
      opacity={0.43}
    />
    <circle
      transform="translate(15 15) scale(.80046)"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeSize}
      r={16.136}
    />
    <path
      d="m204.383-79.054-14.155 24.377h27.785l-13.63-24.377Z"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeSize}
    />
    <rect
      width={25.14}
      height={25.14}
      rx={0}
      ry={0}
      transform="translate(86.445 15)"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeSize}
    />
    <path
      d="m1725.67 362.357 21.043 21.41"
      transform="matrix(0 1.12638 -1.0903 0 504.87 -1861.41)"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeSize}
    />
    <path
      d="m1725.67 362.357 21.043 21.41"
      transform="matrix(1.12638 0 0 1.0903 -1857.496 -312.549)"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeSize}
    />
  </svg>
)

export default CircleIcon
