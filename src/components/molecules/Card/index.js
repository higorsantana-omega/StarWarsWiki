/* eslint-disable prettier/prettier */
import React from 'react'
import { CardContainer, CardImage } from './styles'
import { useNavigation } from '@react-navigation/core'
import { useDataStore } from '../../../services/stores/dataStore'

export const Card = ({ item }) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation()

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }
  return (
    <CardContainer onPress={() => onSelectItem}>
          <CardImage source={{ uri: item.image_url }}/>
    </CardContainer>
  )
}
