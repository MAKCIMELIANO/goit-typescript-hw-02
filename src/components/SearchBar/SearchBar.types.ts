import { Image } from '../App/App.types';

export interface SearchBarProps {
  onSubmit: (topic: string) => Promise<{ results: Image[] }>;
}
