export interface EpisodeData {
  episodes: RootObject
}

interface RootObject {
  info: Info
  results: Result[]
}

export interface Result {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

interface Info {
  count: number
  pages: number
  next: string
  prev?: any
}
