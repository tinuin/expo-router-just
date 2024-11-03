import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const testApiRoute = async () => {
    // const res = await fetch('http://localhost:8081/hello');
    const res = await fetch('/hello');
    console.log(res);
    const body = await res.json();
    Alert.alert("Result", JSON.stringify(body));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" /> */}

      <Button title='fetch from server' 
      onPress={testApiRoute}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
