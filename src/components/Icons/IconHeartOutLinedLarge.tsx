import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width={27} height={25} viewBox="0 0 27 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.18165 11.3898L3.18146 11.3896C1.23547 9.23207 1.23503 5.71578 3.18048 3.56305L3.1805 3.56303C5.04733 1.49722 7.97743 1.49721 9.84431 3.56304L11.8646 5.79869L12.9775 7.03019L14.0904 5.79869L16.0982 3.57698L16.0982 3.57696C17.965 1.51108 20.8951 1.51111 22.762 3.57696C24.7083 5.73074 24.7082 9.24887 22.762 11.4025L22.762 11.4025L12.9662 22.2423L3.18165 11.3898Z"
        stroke="#0A3040"
        strokeWidth="3"
      />
    </Svg>
  );
};

export default SvgComponent;
