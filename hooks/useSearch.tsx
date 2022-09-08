import { useEffect, useState } from 'react'

export function useSearch<T>({
  collection = [],
  filterFuntion,
  term = '',
}: {
  collection: T[] | undefined
  filterFuntion: (val: T) => boolean
  term: string
}): T[] {
  const [filteredData, setFilteredData] = useState(collection)

  useEffect(() => {
    if (collection.length > 0) {
      const collectionFiltered = collection.filter(filterFuntion)
      setFilteredData(collectionFiltered)
    }
  }, [collection, filterFuntion, term])

  return filteredData
}
