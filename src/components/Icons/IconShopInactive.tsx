import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width={49} height={49} viewBox="0 0 49 49" fill="none">
      <Circle
        cx={24.5098}
        cy={24.7219}
        r={22.5}
        stroke="#0A3040"
        strokeWidth={3}
      />
      <Path
        d="M24.51 14.211a10.51 10.51 0 100 21.021 10.51 10.51 0 000-21.02zm0 19.927a9.416 9.416 0 119.416-9.416 9.43 9.43 0 01-9.416 9.416z"
        fill="#0A3040"
      />
      <Path
        d="M25.126 24.159v-3.777a3.55 3.55 0 011.772.892.492.492 0 00.165.112.454.454 0 00.379-.015.502.502 0 00.156-.125.598.598 0 00.088-.599.547.547 0 00-.113-.173 4.318 4.318 0 00-2.45-1.21v-1a.58.58 0 00-.145-.388.477.477 0 00-.353-.161.476.476 0 00-.353.16.58.58 0 00-.146.39v.99c-1.7.193-2.897 1.433-2.897 3.057 0 1.817 1.888 2.397 2.897 2.676v4.181c-.774-.193-1.848-.69-2.274-1.13a.472.472 0 00-.35-.16.472.472 0 00-.348.16.574.574 0 00-.145.385c0 .145.052.283.145.385.598.66 1.998 1.294 2.966 1.46v.91a.58.58 0 00.147.39c.093.102.22.16.352.16.133 0 .26-.058.353-.16a.58.58 0 00.146-.39v-.892c1.273-.166 2.897-.99 2.897-2.863.043-1.449-1.014-2.632-2.889-3.265zm-.998-.298c-.809-.247-1.887-.66-1.887-1.543 0-1.157.925-1.784 1.887-1.954v3.497zm.998 5.353v-3.899c.899.357 1.888 1.02 1.888 2.147.035 1.213-1.186 1.597-1.888 1.734v.018z"
        fill="#0A3040"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.476 15.691a10.861 10.861 0 1112.068 18.062A10.861 10.861 0 0118.475 15.69zm6.034-1.13a10.162 10.162 0 1010.16 10.161m-10.16-10.16a10.164 10.164 0 0110.16 10.16m-6.69-8.376a9.066 9.066 0 10-3.47 17.442 9.08 9.08 0 009.065-9.066 9.065 9.065 0 00-5.596-8.376zm-5.376-1.203a9.767 9.767 0 0111.672 9.579 9.782 9.782 0 01-9.766 9.767 9.768 9.768 0 01-6.906-16.673 9.767 9.767 0 015-2.673zm1.409 2.497a.827.827 0 01.612-.276c.237 0 .456.104.612.276a.93.93 0 01.237.625v.702a4.698 4.698 0 012.343 1.256l.006.006a.942.942 0 01.043 1.242.85.85 0 01-.267.212.807.807 0 01-.944-.156c-.349-.32-.75-.555-1.178-.696v3.08c1.81.68 2.933 1.924 2.888 3.518-.001 1.05-.463 1.818-1.1 2.338-.535.437-1.19.695-1.796.817v.595a.93.93 0 01-.237.625.827.827 0 01-.613.276.827.827 0 01-.612-.276.93.93 0 01-.237-.625v-.624a7.328 7.328 0 01-1.423-.515c-.563-.27-1.11-.617-1.453-.995a.925.925 0 01-.235-.62c0-.228.081-.451.235-.621a.822.822 0 01.609-.275c.233 0 .45.102.604.27.17.174.5.385.905.582.249.122.513.23.764.317v-3.445c-.489-.144-1.125-.364-1.674-.737-.664-.452-1.223-1.148-1.223-2.204 0-1.719 1.203-3.037 2.896-3.358v-.69a.93.93 0 01.238-.624zm.612.425a.127.127 0 00-.093.046.23.23 0 00-.056.154v1.303l-.31.035c-1.543.176-2.587 1.283-2.587 2.709 0 .76.386 1.263.917 1.625.546.37 1.218.573 1.723.713l.257.072v4.896l-.435-.11a7.205 7.205 0 01-1.336-.496c-.428-.209-.848-.464-1.104-.73l-.008-.008a.122.122 0 00-.09-.044.122.122 0 00-.09.044.224.224 0 00-.054.15c0 .062.023.115.054.15.255.281.708.58 1.237.834.524.252 1.085.44 1.53.516l.29.05v1.205a.23.23 0 00.056.154.127.127 0 00.093.046.127.127 0 00.094-.046.23.23 0 00.055-.154v-1.2l.305-.04c.589-.076 1.247-.305 1.75-.715.492-.402.842-.98.842-1.8v-.011c.036-1.231-.852-2.315-2.65-2.923l-.239-.08v-4.447l.413.074a3.9 3.9 0 011.947.98l.006.006.007.006a.14.14 0 00.047.033.104.104 0 00.088-.004.15.15 0 00.046-.038.207.207 0 00.038-.067.247.247 0 00-.006-.172.2.2 0 00-.038-.06 3.968 3.968 0 00-2.246-1.11l-.305-.04v-1.306a.23.23 0 00-.055-.154.127.127 0 00-.093-.046zm-.146 1.882v4.387l-.453-.138c-.407-.124-.922-.301-1.338-.575-.418-.276-.798-.694-.798-1.303 0-1.4 1.131-2.115 2.178-2.299l.41-.072zm-.7.867c-.683.234-1.188.738-1.188 1.504 0 .273.16.504.483.718.205.134.45.245.704.34v-2.562zm.997 3.985l.48.19c.91.362 2.106 1.105 2.109 2.468.02.75-.359 1.25-.821 1.565-.448.305-.985.446-1.35.518l-.064-.326h-.354v-4.415zm.7 3.95v-2.887c.67.358 1.188.878 1.188 1.6v.01c.013.461-.2.757-.515.971-.202.138-.44.236-.672.306z"
        fill="#0A3040"
      />
    </Svg>
  );
};

export default SvgComponent;