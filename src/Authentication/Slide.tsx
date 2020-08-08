import React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { Text } from '../components/Theme';

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
}

export const Slide = ({ title, right }: SlideProps) => {
  const { width, height } = useWindowDimensions();
  const slideMidHeight = 0.5 * (0.61 * height - 100);
  const transform = [
    { translateY: slideMidHeight },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  return (
    <View style={{ width }}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant='hero'>{title}</Text>
      </View>
    </View>
  );
};
