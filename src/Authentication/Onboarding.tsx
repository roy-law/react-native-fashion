import React, { useRef } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { Slide } from './Slide';
import Animated, { multiply, divide } from 'react-native-reanimated';
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash';
import { SubSlide } from './SubSlide';
import { Dot } from './Dot';

const SLIDER_BORDER_RADIUS = 75;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
  },
  slider: {
    borderBottomRightRadius: SLIDER_BORDER_RADIUS,
    backgroundColor: 'cyan',
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: SLIDER_BORDER_RADIUS,
  },
});

const slides = [
  {
    title: 'Relax',
    subtitle: 'Find Your Outfits',
    description:
      'Confused about your outfit? Don’t worry! Find the best outfit here!',
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
  },
];

interface OnboardingProps {}

export const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { width, height } = useWindowDimensions();
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.slider, { height: height * 0.61, backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}>
          {slides.map(({ title }, i) => (
            <Slide right={!!(i % 2)} key={i} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={[styles.footerContent]}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              flexDirection: 'row',
              height: 75,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {slides.map((_, index) => {
              return (
                <Dot
                  key={index}
                  currentIndex={divide(x, width)}
                  {...{ index }}
                />
              );
            })}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: slides.length * width,
              transform: [{ translateX: multiply(x, -1) }],
            }}>
            {slides.map(({ subtitle, description }, i) => (
              <SubSlide
                key={i}
                {...{ subtitle, description }}
                last={i === slides.length - 1}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (i + 1), animated: true });
                  }
                }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
