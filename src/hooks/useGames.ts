import useData from "./useData";
import { GenreType } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface GameType {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: GenreType | null) =>
  useData<GameType>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
