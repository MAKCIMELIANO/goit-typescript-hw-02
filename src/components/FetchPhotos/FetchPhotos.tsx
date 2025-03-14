import axios from 'axios';
import { FetchPhotosResponse } from './FetchPhotos.types';

axios.defaults.baseURL = 'https://api.unsplash.com';

const FetchPhotos = async (
  topic: string,
  page: number = 1,
): Promise<FetchPhotosResponse> => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: topic,
      page: page,
      client_id: 'iavHFvPKRgCxxykzD_vKiAUnKU5wPetO2Q5czd9nN90',
    },
  });

  return {
    results: response.data.results,
    total: response.data.total,
  };
};

export default FetchPhotos;
