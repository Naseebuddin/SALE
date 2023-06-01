// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {
//   Canvas,
//   Group,
//   Image,
//   useImage,
//   Skia,
//   center,
//   RoundedRect
// } from '@shopify/react-native-skia';
// // create a component
// const Mobile = () => {
//   const image = useImage(
//     'https://i.scdn.co/image/ab67616d0000b2733a5bc065989932c556d13103',
//   );
//   const leftstar = Skia.Path.MakeFromSVGString(
//     'M 0 30 L 120 0 L 120 210 L 0 175 Z',
//   );
//   const Rightstar = Skia.Path.MakeFromSVGString(
//     'M 0 0 L 210 50 L 120 175 L 0 210 Z',
//   );
//   const Topstar = Skia.Path.MakeFromSVGString(
//     'M 0 0 L 210 50 L 120 175 L 0 210 Z',
//   );
//   return (
//     <>
//       <Canvas
//         style={{

//           flex: 1,
//           marginTop: 100,
//           backgroundColor: 'red',
//         }}>
//         <Group
//         //   transform={[{translateY: 80}, {translateX: 120}]}
//         clip={leftstar}>
//           <Image
//             image={image}
//             x={0}
//             y={0}
//             width={120}
//             height={210}
//             fit="cover"
//           />
//         </Group>
//         <Group
//           transform={[{translateY: 80}, {translateX: 120}]}
//           clip={Rightstar}>
//           <Image
//             image={image}
//             x={0}
//             y={0}
//             width={120}
//             height={210}
//             fit="cover"
//           />

//         </Group>
//         <Group
//           transform={[{translateY: 0}, {translateX: 120}]}
//           clip={Topstar}>
//           <Image
//             image={image}
//             x={0}
//             y={0}
//             width={120}
//             height={210}
//             fit="cover"
//           />

//         </Group>

//       </Canvas>
//     </>
//   );
// };

// //make this component available to the app
// export default Mobile;

// //import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {Canvas, Group, Image, useImage, Skia} from '@shopify/react-native-skia';
// // create a component
// const Mobile = () => {
//   const image = useImage(
//     'https://i.scdn.co/image/ab67616d0000b2733a5bc065989932c556d13103',
//   );
//   const leftstar = Skia.Path.MakeFromSVGString(
//     'M 30 0 L 170 0 L 210 120 L 0 120 Z',
//   );
//   const Rightstar = Skia.Path.MakeFromSVGString(
//     'M 0 0 L 210 0 L 170 120 L 30 120 Z',
//   );
//   const Topstar = Skia.Path.MakeFromSVGString(
//     'M 52 14 L 100 51 L 49 87 L -0 51 Z',
//   );
//   //    'M 40 0 L 170 0 L 210 120 L 0 120 Z',
//   return (
//     // 20% 0%, 80% 0%, 100% 100%, 0% 100%
//     <>
//       <Canvas
//         style={{
//           flex: 1,
//           marginTop: 100,
//           // backgroundColor: 'red',
//         }}>
//         <Group
//           transform={[{rotate: 1.56}, {translateY: -269}, {translateX: 180}]}
//           clip={leftstar}>
//           <Image
//             image={image}
//             x={0}
//             y={0}
//             width={210}
//             height={120}
//             fit="cover"
//             // transform={[{rotate: -1}]}
//           />
//         </Group>
//         <Group
//           transform={[{rotate: 1.56}, {translateY: -150}, {translateX: 180}]}
//           clip={Rightstar}>
//           <Image
//             image={image}
//             x={0}
//             y={0}
//             width={210}
//             height={120}
//             fit="cover"
//           />
//         </Group>
//         <Group
//           transform={[{rotate: 1}, {translateY: -90}, {translateX: 130}]}
//           clip={Topstar}>
//           <Image
//             image={image}
//             x={0}
//             y={0}
//             width={198}
//             height={53}
//             fit="cover"
//           />
//         </Group>
//       </Canvas>
//     </>
//   );
// };
// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default Mobile;

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Canvas,
  Group,
  Image,
  useImage,
  Skia,
  center,
  rotate,
} from '@shopify/react-native-skia';
// create a component
const Mobile = () => {
  const image = useImage(
    'https://i.scdn.co/image/ab67616d0000b2733a5bc065989932c556d13103',
  );
  const leftstar = Skia.Path.MakeFromSVGString(
    'M 0 30 L 120 0 L 120 210 L 0 175 Z',
  );
  const Rightstar = Skia.Path.MakeFromSVGString(
    'M 0 0 L 210 50 L 120 175 L 0 210 Z',
  );
  const Topstar = Skia.Path.MakeFromSVGString(
    'M 59 0 L 200 68 L 68 200 L 0 68 Z',  //49% 0, 100% 48%, 48% 100%, 0 48%
  );
  return (
    <>
      <Canvas
        style={{
          flex: 1,
          marginTop: 100,
          backgroundColor: 'red',
        }}>
        <Group
          transform={[{translateY: 188}, {translateX: 84.7}]}
          clip={leftstar}>
          <Image
            image={image}
            x={0}
            y={0}
            width={100}
            height={151}
            fit="cover"
          />
        </Group>
        <Group
          transform={[{translateY: 190}, {translateX: 185}]}
          clip={Rightstar}>
          <Image
            image={image}
            x={0}
            y={0}
            width={100}
            height={151}
            fit="cover"
          />
        </Group>
        <Group
          transform={[ {rotate:-.9},{translateY: 100}, {translateX: -80}]}
          clip={Topstar}>
          <Image
            image={image}
            x={0}
            y={0}
            width={120}
            height={220}
            fit="cover"
          />
        </Group>
      </Canvas>
    </>
  );
};

//make this component available to the app
export default Mobile;
