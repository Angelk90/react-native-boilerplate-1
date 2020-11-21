import * as React from 'react';
import Svg, { Path, G, Circle, Rect }from 'react-native-svg';

const RadioButtonSVG = ({ color = 'fff', size }) => {
  return (
    <Svg width={size} height={size}>
      <G>
        <Circle
          stroke="#2196f3"
          cy={size/2}
          cx={size/2}
          strokeWidth={0.3125*size}
          fill={color}
          r={size/2-6}
        />
      </G>
    </Svg>
  );
};

export default RadioButtonSVG;
