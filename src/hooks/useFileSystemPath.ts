import * as FileSystem from 'expo-file-system';

export const useFileSystemPath = (): { path: string } => {
  return {
    path: FileSystem.cacheDirectory + 'ImageManipulator/'
  };
};
