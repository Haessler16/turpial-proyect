import { useEffect, useState } from "react"

export function useDebounce<T>(term: T, wait = 0) {
  const [debouncedValue, setDebounceValue] = useState(term)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebounceValue(term)
    }, wait)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [term, wait])

  return debouncedValue
}
