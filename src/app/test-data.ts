import { GameDetail } from "src/types/game-detail.interface";
import { Game } from "src/types/game.interface";

export const testGame: Game = {
  id: 1,
  title: 'Test Title',
  thumbnail: 'https://www.freetogame.com/g/1/thumbnail.jpg',
  short_description: 'Test short description',
  game_url: 'https://www.freetogame.com/open/test',
  genre: 'Test Genre',
  platform: 'Test Platform',
  publisher: 'Test Publisher',
  developer: 'Test Developer',
  release_date: '2020-01-01',
  freetogame_profile_url: 'https://www.freetogame.com/test'
};

export const testGame2: Game = {
  id: 2,
  title: 'Test Title 2',
  thumbnail: 'https://www.freetogame.com/g/2/thumbnail.jpg',
  short_description: 'Test short description 2',
  game_url: 'https://www.freetogame.com/open/test2',
  genre: 'Test Genre 2',
  platform: 'Test Platform 2',
  publisher: 'Test Publisher 2',
  developer: 'Test Developer 2',
  release_date: '2020-01-02',
  freetogame_profile_url: 'https://www.freetogame.com/test2'
};

export const testGameDetail: GameDetail = {
  ...testGame,
  status: 'Released',
  minimum_system_requirements: {
    os: 'Windows 7',
    processor: 'Intel Core i3',
    memory: '4 GB RAM',
    graphics: 'Nvidia GTX 560 Ti',
    storage: '5 GB available space'
  },
  screenshots: [
    {
      id: 1,
      image: 'https://www.freetogame.com/g/1-1.jpg'
    }
  ],
  description: 'Test game description'
}
  