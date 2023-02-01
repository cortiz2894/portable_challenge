type Props = {
    strokeSize?: number,
    strokeColor?: string
}
const StickIcon = ({ strokeSize = 3, strokeColor='#000000'}:Props) => (
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
      <path
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        d="M9.648 3.184v19.632l-8.296-9.93 8.296-9.702z"
      ></path>
    </svg>
  );

export default StickIcon;
