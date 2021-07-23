/* eslint-disable prettier/prettier */
import React from 'react'
import { ScreenScrollContainer, Hero, GoBack } from '../../components'
import { useDataStore } from '../../services/stores/dataStore'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <GoBack />
    </ScreenScrollContainer>
  )
}
