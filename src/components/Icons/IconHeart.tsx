import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
      <Path
        d="M1.9275 9.80881L10.0722 18.8425C12.7903 15.8347 15.5083 12.8271 18.2264 9.81922C20.0668 7.78273 20.0668 4.50366 18.2264 2.46705C16.386 0.430443 13.4227 0.430401 11.5822 2.46705L10.0816 4.12757L8.57164 2.45664C6.73119 0.420054 3.76792 0.420054 1.9275 2.45664C0.0870811 4.49314 0.088859 7.77028 1.9275 9.80881Z"
        fill="#D0021B"
      />
    </Svg>
  );
};

export default SvgComponent;
