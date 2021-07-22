/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'

const FAKE_DATa = [
  {
    id: 0,
    image_url:
      'https://w7.pngwing.com/pngs/694/623/png-transparent-anakin-skywalker-lego-star-wars-toy-the-force-darth-vader-head-room-c3po-star-wars-darth-vader.png',
  },
  {
    id: 1,
    image_url:
      'https://w7.pngwing.com/pngs/694/623/png-transparent-anakin-skywalker-lego-star-wars-toy-the-force-darth-vader-head-room-c3po-star-wars-darth-vader.png',
  },
]

export const HomeList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATa}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  )
}
