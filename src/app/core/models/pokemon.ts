// This was generated using Chat GPT for speed and convenience and the carefully checked manually.

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

export interface FormOfPoke {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: Array<{
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }>;
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<{
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }>;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface TypeOfPoke {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<Ability>;
  forms: Array<FormOfPoke>;
  game_indices: Array<GameIndex>;
  held_items: Array<HeldItem>;
  location_area_encounters: string;
  moves: Array<Move>;
  species: Species;
  sprites: Sprites;
  stats: Array<Stat>;
  types: Array<TypeOfPoke>;
}

export interface FilterOptions {
  abilities: Array<Ability>;
  formsOfPoke: Array<FormOfPoke>;
  gameIndices: Array<GameIndex>;
  heldItems: Array<HeldItem>;
  moves: Array<Move>;
  species: Array<Species>;
  stats: Array<Stat>;
  typesOfPoke: Array<TypeOfPoke>;
}
