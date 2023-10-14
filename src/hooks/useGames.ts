import { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery) =>
  useData<GameType>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
