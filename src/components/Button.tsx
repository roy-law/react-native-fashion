import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Text, Theme } from '../components/Theme';
import { useTheme } from '@shopify/restyle';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant: 'default' | 'primary';
}

export const Button = ({ label, variant, onPress }: ButtonProps) => {
  const { colors } = useTheme<Theme>();
  const backgroundColor = variant === 'primary' ? colors.primary : colors.grey;
  const color = variant === 'primary' ? colors.white : colors.text;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}>
      <Text style={{ color }} variant='button'>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: 'default',
};
