import { StyleSheet, Text, View } from 'react-native';
import { EditScreenInfo } from '../components/EditScreenInfo';
import { Separator } from '../components/Separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Separator />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}
