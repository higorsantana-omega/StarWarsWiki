import React from 'react'
import { ScreenScrollContainer, Hero, GoBack, CustomText } from '~/components'
import { useDataStore } from '~/services/stores'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <CustomText ml={24} fontFamily="black" size={18}>
        Descrição
      </CustomText>
      <CustomText ml={24} mr={24} size={14} lh={20}>
        {selectedData.description}
      </CustomText>
      <GoBack />
    </ScreenScrollContainer>
  )
}
