import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
      <Path
        d="M12 3.425a9 9 0 100 18 9 9 0 000-18zm0 17.062a8.063 8.063 0 118.062-8.062 8.075 8.075 0 01-8.063 8.062z"
        fill="#0A3040"
      />
      <Path
        d="M12.527 11.942V8.71a3.04 3.04 0 011.518.763.42.42 0 00.14.096.388.388 0 00.325-.013.429.429 0 00.134-.107.51.51 0 00-.022-.66 3.698 3.698 0 00-2.097-1.037v-.855a.497.497 0 00-.125-.333.408.408 0 00-.302-.138.408.408 0 00-.302.138.497.497 0 00-.125.333v.848c-1.455.165-2.48 1.227-2.48 2.617 0 1.556 1.616 2.052 2.48 2.292v3.58c-.663-.166-1.582-.591-1.947-.968a.404.404 0 00-.3-.137c-.112 0-.22.05-.298.137a.492.492 0 00-.124.33c0 .123.044.242.124.33.512.565 1.71 1.107 2.54 1.25v.779c0 .125.045.244.125.333.08.088.189.138.302.138.113 0 .222-.05.302-.138a.497.497 0 00.125-.333v-.764c1.09-.143 2.48-.848 2.48-2.452.037-1.24-.868-2.253-2.473-2.796zm-.854-.254c-.693-.212-1.617-.566-1.617-1.322 0-.99.792-1.528 1.617-1.673v2.995zm.854 4.583v-3.338c.77.305 1.617.873 1.617 1.838.03 1.039-1.016 1.367-1.617 1.484v.016z"
        fill="#0A3040"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.832 4.692a9.3 9.3 0 1110.334 15.466A9.3 9.3 0 016.832 4.692zM12 3.725a8.7 8.7 0 108.7 8.7m-8.7-8.7a8.702 8.702 0 018.7 8.7m-5.73-7.172A7.763 7.763 0 1012 20.187a7.775 7.775 0 007.763-7.763 7.763 7.763 0 00-4.792-7.17zm-4.601-1.03a8.362 8.362 0 019.994 8.202A8.376 8.376 0 0112 20.787 8.364 8.364 0 016.086 6.512a8.363 8.363 0 014.282-2.29zm1.205 2.138a.708.708 0 01.525-.236c.203 0 .39.089.524.236.133.146.203.34.203.535v.601c.747.152 1.44.524 2.006 1.076l.006.005a.806.806 0 01.037 1.064.73.73 0 01-.23.18.692.692 0 01-.808-.133 2.783 2.783 0 00-1.009-.596v2.638c1.55.582 2.512 1.647 2.474 3.011a2.5 2.5 0 01-.942 2.002c-.46.375-1.02.596-1.539.7v.51c0 .195-.07.388-.203.534a.708.708 0 01-.524.237.708.708 0 01-.524-.237.797.797 0 01-.203-.534v-.535a6.27 6.27 0 01-1.219-.44c-.482-.232-.95-.529-1.244-.853a.791.791 0 01-.201-.531c0-.195.07-.386.201-.532a.704.704 0 01.522-.235c.2 0 .384.087.517.231.146.15.427.33.774.5.214.103.44.196.655.27v-2.95c-.418-.123-.964-.311-1.433-.63-.57-.388-1.048-.984-1.048-1.888 0-1.471 1.03-2.6 2.48-2.875v-.59c0-.196.07-.389.203-.535zm.525.364a.109.109 0 00-.08.04.197.197 0 00-.048.13v1.116l-.266.03c-1.32.15-2.214 1.1-2.214 2.32 0 .652.33 1.082.785 1.391.467.318 1.043.492 1.476.611l.22.061v4.193l-.373-.094a6.168 6.168 0 01-1.144-.425c-.367-.179-.726-.398-.946-.624l-.007-.007a.104.104 0 00-.076-.039.105.105 0 00-.077.038.192.192 0 00-.046.129c0 .053.02.098.046.128.218.24.606.497 1.059.714.448.215.928.376 1.31.442l.249.043v1.032c0 .054.02.1.047.131.027.03.056.04.08.04s.053-.01.08-.04a.197.197 0 00.047-.131v-1.027l.261-.035c.505-.066 1.068-.261 1.499-.613.421-.343.72-.838.72-1.541v-.01c.032-1.053-.729-1.981-2.269-2.502l-.204-.069V8.35l.353.063a3.34 3.34 0 011.668.839l.006.005.005.006a.12.12 0 00.04.028.088.088 0 00.075-.004.128.128 0 00.04-.032.178.178 0 00.032-.058.21.21 0 00-.004-.147.171.171 0 00-.033-.05 3.397 3.397 0 00-1.923-.951l-.261-.035V6.896a.197.197 0 00-.047-.132.109.109 0 00-.08-.04zm-.125 1.61v3.758l-.388-.118c-.349-.107-.79-.258-1.146-.493-.358-.237-.683-.594-.683-1.116 0-1.198.969-1.81 1.865-1.968l.352-.062zm-.6.744c-.584.2-1.017.631-1.017 1.287 0 .235.137.432.414.615.175.115.385.21.603.29V9.08zm.854 3.412l.411.163c.78.31 1.803.945 1.806 2.113.017.641-.307 1.07-.703 1.34-.384.261-.843.382-1.156.443l-.055-.28h-.303v-3.78zm.6 3.382v-2.472c.574.306 1.017.752 1.017 1.37v.009c.011.394-.172.648-.44.83a2.131 2.131 0 01-.577.263z"
        fill="#0A3040"
      />
    </Svg>
  );
};

export default SvgComponent;
