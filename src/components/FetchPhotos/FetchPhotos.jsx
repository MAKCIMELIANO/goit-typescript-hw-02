import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const FetchPhotos = async (topic, page = 1) => {
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
