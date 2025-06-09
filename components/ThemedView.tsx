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
    <View style={[{ backgroundColor: color.background }, style]} {...props} />
  );
};

export default ThemedView;

// import {
//   SafeAreaView,
//   View,
//   Platform,
//   StatusBar,
//   ViewProps,
//   StyleSheet,
// } from "react-native";
// import { Colors } from "../constants/Color";
// import { ReactNode } from "react";
// import { useTheme } from "../context/ThemeContext";
// import { usePathname } from "expo-router";

// interface ThemedViewProps extends ViewProps {
//   children?: ReactNode;
// }

// const ThemedView = ({ style, children, ...props }: ThemedViewProps) => {
//   const { theme } = useTheme();
//   const color = Colors[theme];
//   const pathname = usePathname();

//   const isAuthPage = pathname === "/auth/login" || pathname === "/auth/register";

//   const commonStyle = [
//     styles.safeArea,
//     { backgroundColor: color.background },
//     style,
//   ];

//   if (isAuthPage) {
//     return (
//       <View style={commonStyle} {...props}>
//         {children}
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView
//       style={[
//         ...commonStyle,
//         { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
//       ]}
//       {...props}
//     >
//       {children}
//     </SafeAreaView>
//   );
// };

// export default ThemedView;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });
