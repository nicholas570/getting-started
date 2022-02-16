import { Image, StyleSheet } from 'react-native';
import { usePicturesCache } from '../hooks/usePicturesCache';

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
  const { picturesUri, path } = usePicturesCache();

  return picturesUri.length > 0 ? (
    <Image
      style={{
        flex: 1,
        resizeMode: 'cover',
        height: 500
      }}
      source={{ uri: `${path}${picturesUri[0]}` }}
    />
  ) : null;
};
