import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Character: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  console.log({ id })
  return <div>Character</div>
}

export default Character
