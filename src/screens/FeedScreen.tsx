import { FlatList, Image, StyleSheet } from 'react-native';
import { usePicturesCache } from '../hooks/usePicturesCache';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 500
  }
});

export const FeedScreen = () => {
  const { picturesUri, path } = usePicturesCache();

  const renderPictures = ({ item }: { item: string }) => {
    return <Image style={styles.image} source={{ uri: `${path}${item}` }} />;
  };

  return picturesUri.length > 0 ? <FlatList data={picturesUri} keyExtractor={(item: string) => item} renderItem={renderPictures} /> : null;
};
