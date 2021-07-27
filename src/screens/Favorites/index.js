import React, { useEffect } from 'react'
import { CustomText, ScreenScrollContainer } from '~/components'
import { useFavorites } from '~/services/hooks'

export const FavoritesScreen = ({ navigation }) => {
  const { getFavorites } = useFavorites()
  const callGetFavorites = async () => {
    const favorites = await getFavorites()
    console.log(favorites)
  }

  useEffect(() => {
    const unsunscribe = navigation.addListener('focus', () => {
      callGetFavorites()
    })

    return unsunscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ScreenScrollContainer withPadding>
      <CustomText fontFamily="bold" size={28}>
        Favoritos
      </CustomText>
    </ScreenScrollContainer>
  )
}
