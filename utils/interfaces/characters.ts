export interface CharactersData {
  characters: Characters
}

export interface CharacterData {
  character: CharacterResult
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
  episode: Episode[]
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

interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  created: string
}

export interface Location {
  name: string
  url: string
}

export type Gender = 'Female' | 'Male' | 'unknown'

export type Species = 'Alien' | 'Human'

export type Status = 'Alive' | 'Dead' | 'unknown'
