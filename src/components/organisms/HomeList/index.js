import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { ListContainer } from './styles'
import { theme } from '../../../styles/theme'
import { CustomText } from '../../atoms'

export const HomeList = ({ data, title, type }) => {
  return (
    <ListContainer>
      <CustomText ml={24} fontFamily="black" size={18}>
        {title}
      </CustomText>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={{...item, type}} />}
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
