import React from "react";

type Props = {
    strokeSize: number,
    strokeColor: string,
}


const Structure = ({strokeSize, strokeColor}:Props) => {
  return (
    <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 1920 867"
      style={{
        position: 'absolute',
        width: '894px',
        overflow: 'initial'
      }}
    >

      <path
        fill="url(#background)"
        stroke={strokeColor}
        strokeWidth={strokeSize}
        d="M1502.264 4.362H422.924q-8.711.048-10.7 1.93h-40.336q-29.775 7.127-48.324 28.14c-18.549 21.011-51.67 45.444-79.993 46.577q-29.078 7.175-92.709 7.062-25.49 4.417-37.256 16.307c-11.766 11.89-98.82 82.979-112.065 276.798s51 457.85 370.347 478.38h1170.179Q1920.54 819.754 1920.54 433.5c0-239.878-91.708-301.339-127.125-340.05-8.546-6.923-24.936-5.875-36.788-6.383-84.012-6.058-111.19 3.71-171.167-63.297-24.349-19.408-34.785-17.477-66.759-17.477-7.305 0-10.675-1.93-16.437-1.93z"
      ></path>
    </svg>
    <svg 
        style={{
            width:0,
            height:0,
            position:'absolute'
        }}
        aria-hidden="true"
        focusable="false"
    >
        <linearGradient id="background" x2="1" y1="-0.5">
            <stop offset="30%" stop-color="rgb(71, 73, 72)" />
            <stop offset="100%" stop-color="rgb(18, 18, 20)" />
        </linearGradient>
        <linearGradient id="gradientInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="10.5%" stop-color="#7e7f81" />
            <stop offset="0%" stop-color="#212225" />
        </linearGradient>
        <linearGradient id="borderVita" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="30%" stop-color="#cccfcf" />
            <stop offset="100%" stop-color="#7f8284" />
        </linearGradient>
    </svg>
  </>
  );
}

export default Structure;