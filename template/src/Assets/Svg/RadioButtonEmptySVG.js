import * as React from 'react';
import Svg, { Path, G, Circle, Rect }from 'react-native-svg';

const RadioButtonEmptySVG = ({ color = 'fff', size }) => {
  return (
    <Svg width={size} height={size}>
      <G>
        <Circle
          fill={color}
          cy={size/2}
          cx={size/2}
          stroke="#ccc"
          r={size/2-1}
          strokeWidth={1}
        />
      </G>
    </Svg>
  );
};

export default RadioButtonEmptySVG;
