import { Camera } from 'expo-camera';
import { useEffect, useState } from 'react';

export const useCamera = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return {
    hasPermission
  };
};
