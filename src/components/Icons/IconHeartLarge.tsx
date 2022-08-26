import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width={27} height={25} viewBox="0 0 27 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.56759 12.3943L13.4649 24.481C17.1016 20.4567 20.7382 16.4326 24.3749 12.4082C26.8373 9.68344 26.8373 5.29617 24.3749 2.57126C21.9125 -0.153645 17.9477 -0.153701 15.4853 2.57126L13.4775 4.79298L11.4572 2.55733C8.99475 -0.167546 5.03001 -0.167546 2.56759 2.55733C0.105186 5.28209 0.107565 9.66678 2.56759 12.3943Z"
        fill="#D0021B"
      />
    </Svg>
  );
};

export default SvgComponent;