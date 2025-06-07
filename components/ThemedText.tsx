import { Text, TextProps } from "react-native";
import { Colors } from "../constants/Color";
import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface ThemedTextProps extends TextProps {
  title?: boolean;
  children?: ReactNode;
}

const ThemedText = ({ style, title = false, ...props }: ThemedTextProps) => {
  const { theme } = useTheme(); 
  const colorScheme = Colors[theme];

  const textColor = title ? colorScheme.title : colorScheme.text;

  return (
    <Text style={[{ color: textColor }, style]} {...props}/>
  );
};

export default ThemedText;
