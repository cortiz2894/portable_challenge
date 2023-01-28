type Props = {
    strokeSize?: number,
    strokeColor?: string
}

const SquareIcon = ({ strokeSize = 3, strokeColor='#000000'}:Props) => (
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
        transform="translate(182.985 13.879)"
      ></ellipse>
      <path
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        d="M204.383-79.054l-14.155 24.377h27.785l-13.63-24.377z"
      ></path>
      <rect
        width="25.14"
        height="25.14"
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        rx="0"
        ry="0"
        transform="translate(2.43 2.43)"
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
        strokeWidth="3.84"
        d="M1725.67 362.357l21.043 21.41"
        transform="matrix(1.12638 0 0 1.0903 -1857.496 -312.549)"
      ></path>
  </svg>
)

export default SquareIcon



