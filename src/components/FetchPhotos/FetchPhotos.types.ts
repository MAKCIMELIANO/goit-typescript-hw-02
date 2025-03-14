export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
    regular?: string;
  };
  description: string;
}

export interface FetchPhotosResponse {
  results: Image[];
  total: number;
}
