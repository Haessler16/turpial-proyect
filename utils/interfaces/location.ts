export interface LocationsData {
  locations: Locations
}

interface Locations {
  info: Info
  results: Result[]
}

export interface Result {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

interface Info {
  count: number
  pages: number
  next: string
  prev?: any
}
