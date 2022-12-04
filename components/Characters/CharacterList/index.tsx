import Image from 'next/image'
import NextLink from 'next/link'

import { FC } from 'react'

import {
  Card,
  CardBody,
  CardHeader,
  chakra,
  Grid,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

import { Card as TvmCard } from 'components/Card'
import { CharacterResult } from 'utils/interfaces/characters'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Keyboard } from 'swiper'

import styles from './styles.module.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface CharacterListProps {
  character: CharacterResult
  type?: 'group' | 'individual'
}

export const CharacterList: FC<CharacterListProps> = ({
  character,
  type = 'group',
}) => {
  const getStatusColor = (status: 'Alive' | 'Dead' | 'unknown') => {
    return status === 'Alive'
      ? 'green.300'
      : status === 'Dead'
      ? 'red.300'
      : 'black'
  }

  if (type === 'group') {
    return (
      <TvmCard
        borderRadius='lg'
        border='2px'
        p={4}
        borderColor={getStatusColor(character.status)}>
        <NextLink href={`/characters/${character.id}`}>
          <Link>
            <Heading>{character.name}</Heading>
          </Link>
        </NextLink>

        <chakra.figure w='100%'>
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            layout='responsive'
            style={{ borderRadius: '25px' }}
            priority={character.name === 'Morty Smith' ? true : false}
          />
        </chakra.figure>
      </TvmCard>
    )
  }

  return (
    <TvmCard
      w='80%'
      borderRadius='lg'
      border='2px'
      borderColor={getStatusColor(character.status)}
      p={3}>
      <Heading>{character.name}</Heading>

      <SimpleGrid templateColumns='0.578fr 1fr' gap={6} w='100%'>
        <chakra.figure>
          <Image
            src={character.image}
            alt={character.name}
            width={400}
            height={400}
            // layout='responsive'
            style={{ borderRadius: '25px' }}
          />
        </chakra.figure>

        <div>
          <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={2}
            w='100%'>
            <Text>Status: {character.status}</Text>
            <Text>Gender: {character.gender}</Text>
            <Text>Species: {character.species}</Text>
            {character.type !== '' && <Text>type: {character.type}</Text>}
            {/* <Text>Type: {character.type}</Text> */}
          </Grid>

          <Card w='100%' maxW='500px' h='100%' maxH='240px' bg='#dbdbdb50'>
            <CardHeader>
              <Heading size='md'>Episodes: </Heading>
            </CardHeader>

            <CardBody p='1'>
              <Swiper
                modules={[Navigation, Keyboard, Pagination]}
                slidesPerView={2}
                spaceBetween={30}
                keyboard={{ enabled: true }}
                pagination={{ clickable: true }}
                navigation={true}
                style={{ position: 'initial' }}>
                {character.episode.map((ep) => {
                  return (
                    <SwiperSlide key={ep.id} className={styles['swiper-slide']}>
                      <NextLink href={`/episodes/${ep.id}`}>
                        <Link>{ep.episode}</Link>
                      </NextLink>

                      <p>{ep.name}</p>
                    </SwiperSlide>
                  )
                })}
                {/* <SwiperSlide className={styles['swiper-slide']}>
                  <NextLink href={`/episodes/1`}>
                    <Link>S0201</Link>
                  </NextLink>

                  <p>BUM</p>
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                  <NextLink href={`/episodes/1`}>
                    <Link>S0202</Link>
                  </NextLink>

                  <p>KAT</p>
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                  <NextLink href={`/episodes/1`}>
                    <Link>S0203</Link>
                  </NextLink>

                  <p>FUM</p>
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                  <NextLink href={`/episodes/1`}>
                    <Link>S0204</Link>
                  </NextLink>

                  <p>TAM</p>
                </SwiperSlide> */}
              </Swiper>
            </CardBody>
          </Card>
        </div>
      </SimpleGrid>
    </TvmCard>
  )
}
