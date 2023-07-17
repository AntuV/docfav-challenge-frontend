import { GameCategory } from "src/types/game-category.interface";
import { GamePlatform } from "src/types/game-platform.interface";
import { GameSort } from "src/types/game-sort.interface";

/**
 * Categorías/tags disponibles para filtrar juegos en el listado
 */
export const gameCategories: GameCategory[] = [
  { value: 'mmo', label: 'MMO' },
  { value: 'mmorpg', label: 'MMORPG' },
  { value: 'shooter', label: 'Shooter' },
  { value: 'strategy', label: 'Strategy' },
  { value: 'moba', label: 'Moba' },
  { value: 'card', label: 'Card Games' },
  { value: 'racing', label: 'Racing' },
  { value: 'sports', label: 'Sports' },
  { value: 'social', label: 'Social' },
  { value: 'fighting', label: 'Fighting' },
  { value: 'mmofps', label: 'MMOFPS' },
  { value: 'action-rpg', label: 'Action RPG' },
  { value: 'sandbox', label: 'Sandbox' },
  { value: 'open-world', label: 'Open World' },
  { value: 'survival', label: 'Survival' },
  { value: 'battle-royale', label: 'Battle Royale' },
  { value: 'mmotps', label: 'MMOTPS' },
  { value: 'anime', label: 'Anime' },
  { value: 'pvp', label: 'PvP' },
  { value: 'pve', label: 'PvE' },
  { value: 'pixel', label: 'Pixel' },
  { value: 'mmorts', label: 'MMORTS' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'sci-fi', label: 'Sci-Fi' },
  { value: 'action', label: 'Action' },
  { value: 'voxel', label: 'Voxel' },
  { value: 'zombie', label: 'Zombie' },
  { value: 'turn-based', label: 'Turn-Based' },
  { value: 'first-person', label: 'First Person View' },
  { value: 'third-Person', label: 'Third Person View' },
  { value: 'top-down', label: 'Top-Down View' },
  { value: '3d', label: '3D Graphics' },
  { value: '2d', label: '2D Graphics' },
  { value: 'tank', label: 'Tank' },
  { value: 'space', label: 'Space' },
  { value: 'sailing', label: 'Sailing' },
  { value: 'side-scroller', label: 'Side Scroller' },
  { value: 'superhero', label: 'Superhero' },
  { value: 'permadeath', label: 'Permadeath' }
];

export const gamePlatforms: GamePlatform[] = [
  { value: 'pc', label: 'PC' },
  { value: 'browser', label: 'Navegador' },
  { value: 'all', label: 'Todas' }
];

export const gameSortBy: GameSort[] = [
  { value: 'release-date', label: 'Fecha de lanzamiento' },
  { value: 'popularity', label: 'Popularidad' },
  { value: 'alphabetical', label: 'Alfabético' },
  { value: 'relevance', label: 'Relevancia' }
];