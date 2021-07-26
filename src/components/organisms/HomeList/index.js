 
import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { ListContainer } from './styles'
import { theme } from '../../../styles/theme'
import { CustomText } from '../../atoms'

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

export const HomeList = ({ data, title }) => {
  return (
    <ListContainer>
      <CustomText ml={24} fontFamily="black" size={18}>
        {title}
      </CustomText>
      <FlatList
        horizontal
        data={FAKE_DATa}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(24),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </ListContainer>
  )
}
