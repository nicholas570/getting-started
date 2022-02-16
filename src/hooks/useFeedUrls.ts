import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFeedUrls = () => {
  const [serverImagesUrls, setServerImagesUrls] = useState([]);

  useEffect(() => {
    (async () => {
      const filesUrl = await axios.get('https://wildstagram.nausicaa.wilders.dev/list');
      setServerImagesUrls(filesUrl.data);
    })();
  }, []);

  return serverImagesUrls;
};
