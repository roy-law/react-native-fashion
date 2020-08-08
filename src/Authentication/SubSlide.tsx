import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import { Text } from '../components/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    marginBottom: 40,
    textAlign: 'center',
  },
});

interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

export const SubSlide = ({
  subtitle,
  description,
  last,
  onPress,
}: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle} variant='title2'>
        {subtitle}
      </Text>
      <Text style={styles.description} variant='body'>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};
