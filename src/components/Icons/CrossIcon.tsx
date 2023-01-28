import * as React from "react"

type Props = {
    strokeSize?: number,
    strokeColor?: string
}

const CrossIcon = ({ strokeSize = 3, strokeColor='#000000'}:Props) => (
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
        d="M64.727-15.306l-12.21 21.03h23.97l-11.76-21.03z"
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
        transform="matrix(0 1.25419 -1.21401 0 467.903 -2162.506)"
      ></path>
      <path
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        d="M1725.67 362.357l21.043 21.41"
        transform="matrix(1.25419 0 0 1.21401 -2162.506 -437.903)"
      ></path>
  </svg>
)

export default CrossIcon



