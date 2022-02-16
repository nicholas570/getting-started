import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from 'react';

export const usePicturesCache = (): { picturesUri: string[] } => {
  const [pictures, setPictures] = useState<Array<string>>([]);

  useEffect(() => {
    (async () => {
      const images = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory + 'ImageManipulator');
      setPictures(images);
    })();
  }, []);

  return {
    picturesUri: pictures
  };
};
