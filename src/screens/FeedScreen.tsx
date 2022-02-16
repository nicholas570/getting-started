import { StyleSheet, Text, View } from 'react-native';

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

export const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed Screen</Text>
    </View>
  );
};
