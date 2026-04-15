import { PokemonStats } from "./pokemon-stats.model";
import { PokemonSummary } from "./pokemon-summary.model";
import { PokemonType } from "./pokemon-type.model";

export interface PokemonDetail extends PokemonSummary {
  description: string;
  height: string;
  weight: string;
  category: string;
  abilities: string[];
  availableGenders?: string[];
  types: PokemonType[];
  weaknesses: PokemonType[];
  stats: PokemonStats;
  evolutionChain?: PokemonSummary[];
}