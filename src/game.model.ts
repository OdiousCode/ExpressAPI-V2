import { loadGamesJSON } from "./fileOperations";

export interface Game {
    id: number,
    title: string,
    genre: string,
    price: number
  }
  export const gamesArray: Game[] = loadGamesJSON("gameList.json");