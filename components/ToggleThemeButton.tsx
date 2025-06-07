import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';
import ThemedView from './ThemedView';
import { useTheme } from '../context/ThemeContext';
import { Colors } from '../constants/Color';
import ThemedText from './ThemedText';

const ToggleThemeMode = () => {
  const { theme, toggleTheme } = useTheme();
  const color = Colors[theme];

  return (
    <ThemedView>
      <Pressable onPress={toggleTheme} style={[styles.button, {backgroundColor: color.buttonBackground}]}>
        <ThemedText  style={{ color: color.buttonText, fontWeight: '800' }}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
};

export default ToggleThemeMode;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 3
  },
});
