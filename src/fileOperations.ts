import fs from "fs";
import { Game } from "./game.model"

export function loadGamesJSON(file = ''): Game[] {
    if (fs.existsSync(file)) {
      const jsonData = fs.readFileSync(file, { encoding: 'utf-8' });
      if (jsonData.length > 0)
        return JSON.parse(jsonData);
    }
    return []
  }
  
export function saveGamesJSON(gameList: Game[]) {
    return fs.writeFileSync("gameList.json", JSON.stringify(gameList, null, 2))
  }