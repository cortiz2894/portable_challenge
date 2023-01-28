
type Props = {
    stroke?: number,
    background?: string
}
const ControlShape = ({stroke=3, background='none'}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 271.49 446.66"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
  >
    <path
      d="M0 127.42C0 57.049 57.682 0 128.836 0s128.837 57.048 128.837 127.42c0 39.413-18.093 74.646-46.512 98.019-5.013 5.984-7.933 13.162-7.933 20.879 0 10.331 5.233 19.696 13.718 26.526 32.104 13.986 54.541 45.947 54.541 83.139 0 50.077-40.68 90.673-90.86 90.673s-87.932-40.596-87.932-90.673c0-48.567 25.321-55.587 25.321-76.754 0-7.36-3.617-14.302-7.723-19.369-1.14-1.405-8.548-7.2-26.773-13.542C23.521 225.438 0 168.867 0 127.42Z"
      fill={background}
      stroke="#000"
      strokeWidth={stroke}
    />
  </svg>
)

export default ControlShape