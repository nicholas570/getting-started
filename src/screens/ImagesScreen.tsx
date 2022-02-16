import { Button, FlatList, Image, StyleSheet } from 'react-native';
import singleFileUploader from 'single-file-uploader';
import { useFileSystemPath } from '../hooks/useFileSystemPath';
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

export const ImagesScreen = () => {
  const { picturesUri } = usePicturesCache();
  const { path } = useFileSystemPath();

  const upload = async (item: string) => {
    try {
      await singleFileUploader({
        distantUrl: 'https://wildstagram.nausicaa.wilders.dev/upload',
        filename: item,
        filetype: 'image/jpeg',
        formDataName: 'fileData',
        localUri: `${path}${item}`
      });
    } catch (e: any) {
      alert(e.message);
    }
  };

  const renderPictures = ({ item }: { item: string }) => {
    return (
      <>
        <Image style={styles.image} source={{ uri: `${path}${item}` }} />
        <Button title="upload" onPress={() => upload(item)} />
      </>
    );
  };

  return picturesUri.length > 0 ? <FlatList data={picturesUri} keyExtractor={(item: string) => item} renderItem={renderPictures} /> : null;
};
