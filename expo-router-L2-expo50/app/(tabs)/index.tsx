import { StyleSheet, FlatList, Pressable } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { getTasks, setTaskStatus } from '../../services/database';

export default function TabOneScreen() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => { 
    try {
       // getTasks().then(setTasks);
      const result = await getTasks()
      setTasks(result)
    } catch (e) {
      Alert.alert('Failed to fetch tasks', e.message);
    }

  }

  useEffect(() => {
    fetchTasks();
  },[])


  return (
    <View style={styles.container}>
      <FlatList 
        data={tasks}
        contentContainerStyle={{ gap:10, padding:10}}
        renderItem={({ itme }) => (
          <Pressable 
            // onPress={() => setTaskStatus(itme.id, !itme.complete)}
            onPress={ async () => {
              await setTaskStatus(itme.id, !itme.complete);
              fetchTasks()
            }}

            style={{
              flexDirection: 'row', 
              justifyContent: 'space-between',
              backgroundColor: '#333',
              padding: 10,
              borderRadius: 5
            }}
            >
            <Text style={{
              textDecorationLine: itme.complete ? 'line-through' :'none',
              color: itme.complete ? 'gray' : 'white',
            }}>{ itme.value }</Text>
            <Text>{ itme.points }</Text>
          </Pressable>
        )}
      
      />
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center', 
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
