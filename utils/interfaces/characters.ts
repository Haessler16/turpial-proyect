export interface CharactersData {
  characters: Characters
}
export interface Characters {
  info: Info
  results: CharacterResult[]
}

export interface Info {
  count: number
  next: string
  pages: number
  prev: null
}

export interface CharacterResult {
  created: Date
  episode: string[]
  gender: Gender
  id: number
  image: string
  location: Location
  name: string
  origin: Location
  species: Species
  status: Status
  type: string
  url: string
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface Location {
  name: string
  url: string
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
