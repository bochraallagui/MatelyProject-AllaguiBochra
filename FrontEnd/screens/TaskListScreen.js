import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, FlatList, Pressable, Text, StyleSheet, ActivityIndicator } from 'react-native';
import TaskItem from '../components/TaskItem';
import { fetchTasksAfter, simulateTasks } from '../services/api';

export default function TaskListScreen() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false); 
  const lastFetchTime = useRef(new Date('2024-01-01'));

  const loadTasks = useCallback(async () => {
    const newTasks = await fetchTasksAfter(lastFetchTime.current);
    if (newTasks.length > 0) {
      lastFetchTime.current = new Date(newTasks[newTasks.length - 1].createdAt);
      setTasks(prev => [...prev, ...newTasks]);
    }
  }, []);

  useEffect(() => {
    loadTasks(); 
    const interval = setInterval(loadTasks, 5000); // rafraîchir toutes les 5s
    return () => clearInterval(interval);
  }, [loadTasks]);

  const handleSimulate = async () => {
    setLoading(true);         
    await simulateTasks();    
    setLoading(false);        
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleSimulate} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>SIMULER DES AJOUTS</Text>
        )}
      </Pressable>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id + item.createdAt}
        renderItem={({ item }) => <TaskItem task={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f2f2f2',
  },
  button: {
    backgroundColor: '#2196F3',
    marginHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
