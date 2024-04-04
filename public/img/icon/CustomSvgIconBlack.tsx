import React from 'react'

const CustomSvgIconBlack = ({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) => {
  return (
    <svg
      viewBox='262.075 92.064 38.525 13.249'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      style={{ width: '100px', height: 'auto', ...style }} // let's add the style prop here
    >
      <text
        style={{
          fill: 'black', // let's change the fill color to black
          fontFamily: 'Arial, sans-serif',
          fontSize: '13.7px',
          paintOrder: 'stroke',
          whiteSpace: 'pre',
        }}
        transform='matrix(1, 0, 0, 1, 0, 1.4210854715202004e-14)'
      >
        <tspan x='262.253' y='103.565' style={{ fontFamily: 'Megrim' }}>
          xiao
        </tspan>
        <tspan style={{ fontFamily: 'ZCOOL XiaoWei' }}>松</tspan>
      </text>
    </svg>
  )
}

export default CustomSvgIconBlack
