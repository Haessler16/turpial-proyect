import { useEffect, useState } from "react"

export function useSearch({ collection, filterFuntion, term = "" }): any[] {
  const [filteredData, setFilteredData] = useState(collection)

  useEffect(() => {
    if (collection) {
      const collectionFiltered = collection.filter(filterFuntion)
      setFilteredData(collectionFiltered)
    }
  }, [collection, term, filterFuntion])

  return filteredData
}
