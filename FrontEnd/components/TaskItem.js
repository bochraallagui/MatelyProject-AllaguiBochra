import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

const statusColors = {
  todo: '#eeeeee',
  in_progress: '#bbdefb',
  done: '#c8e6c9',
};

export default function TaskItem({ task }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const backgroundColor = statusColors[task.status] || '#fff';

  return (
    <Animated.View
      style={[
        styles.taskContainer,
        {
          backgroundColor,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Text style={styles.title}>{task.title}</Text>
      <Text>Status: {task.status}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
