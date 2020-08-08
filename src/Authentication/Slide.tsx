import React from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 80,
    lineHeight: 80,
    color: 'white',
    textAlign: 'center',
  },
});

interface SlideProps {
  // color: string;
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
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};
