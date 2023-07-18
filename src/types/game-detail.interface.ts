import { Game } from './game.interface';

export interface GameDetail extends Game {
  status: string;
  description: string;
  minimum_system_requirements: GameRequirements;
  screenshots: GameScreenshot[];
}

export interface GameRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface GameScreenshot {
  id: number;
  image: string;
}
