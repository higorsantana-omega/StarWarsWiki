import React, { useEffect, useState } from 'react'
import { CustomText, ScreenScrollContainer, GridList } from '~/components'
import { useFavorites } from '~/services/hooks'

export const FavoritesScreen = ({ navigation }) => {
  const [favoritesList, setFavoritesList] = useState([])
  const { getFavorites } = useFavorites()
  const callGetFavorites = async () => {
    const favorites = await getFavorites()
    setFavoritesList(favorites)
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
      <GridList data={favoritesList} />
    </ScreenScrollContainer>
  )
}
