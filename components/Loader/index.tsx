import { Center } from '@chakra-ui/react'
import style from './style.module.css'

export default function Loader() {
  return (
    <Center h='100vh'>
      <span className={style.loader}></span>
    </Center>
  )
}
