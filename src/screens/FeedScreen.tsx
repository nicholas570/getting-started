import { FlatList, Image, StyleSheet } from 'react-native';
import { useFeedUrls } from '../hooks/useFeedUrls';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    resizeMode: 'contain',
    height: 500
  }
});

export const FeedScreen = () => {
  const serverImagesUrls = useFeedUrls();

  const renderPictures = ({ item }: { item: string }) => {
    return (
      <Image
        style={styles.image}
        source={{
          uri: 'https://wildstagram.nausicaa.wilders.dev/files/' + item
        }}
      />
    );
  };
  return serverImagesUrls.length > 0 ? (
    <FlatList data={serverImagesUrls} keyExtractor={(serverImageURI) => serverImageURI} renderItem={renderPictures} />
  ) : null;
};
