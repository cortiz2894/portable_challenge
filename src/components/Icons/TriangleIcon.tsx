import * as React from "react"

type Props = {
    strokeSize?: number,
    strokeColor?: string
}

const TriangleIcon = ({ strokeSize = 3, strokeColor='#000000'}:Props) => (
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
    <ellipse
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        rx="16.136"
        ry="16.136"
        transform="translate(122.705 -45.64) scale(.80046)"
      ></ellipse>
      <path
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        d="M15.334 4.673L3.123 25.703h23.97l-11.76-21.03z"
      ></path>
      <rect
        width="25.14"
        height="25.14"
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        rx="0"
        ry="0"
        transform="translate(86.445 15)"
      ></rect>
      <path
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        d="M1725.67 362.357l21.043 21.41"
        transform="matrix(0 1.12638 -1.0903 0 504.87 -1861.41)"
      ></path>
      <path
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        d="M1725.67 362.357l21.043 21.41"
        transform="matrix(1.12638 0 0 1.0903 -1857.496 -312.549)"
      ></path>
  </svg>
)

export default TriangleIcon



