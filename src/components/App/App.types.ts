import { Image as FetchImage } from '../FetchPhotos/FetchPhotos.types';

export type Image = FetchImage;

export interface FetchPhotosResult {
  results: Image[];
  total: number;
}
