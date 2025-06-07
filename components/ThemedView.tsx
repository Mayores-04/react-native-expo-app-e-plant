// import { View ,ViewProps, useColorScheme } from "react-native";
// import { Colors } from "../constants/Color";
// import { ReactNode } from "react";

// // interface ThemedViewProps extends ViewProps {
// //   children?: ReactNode;
// // }

// const ThemedView = ({ style, ...props }: ViewProps) => {
//   const colorScheme = useColorScheme();
//   const theme = Colors[colorScheme ?? "light"];

//   return (
//     <View style={[{ backgroundColor: theme.uiBackground }, style]} {...props} />
//   );
// };

// export default ThemedView;


import { View, ViewProps } from "react-native";
import { Colors } from "../constants/Color";
import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface ThemedViewProps extends ViewProps {
  children?: ReactNode;
}

const ThemedView = ({ style, ...props }: ThemedViewProps) => {
  const { theme } = useTheme();
  const color = Colors[theme];

  return (
    <View style={[{ backgroundColor: color.uiBackground }, style]} {...props} />
  );
};

export default ThemedView;
