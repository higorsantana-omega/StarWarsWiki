import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
} from './styles'
import { CustomText, Logo } from '~/components/atoms'
import { Tag, IconButton, PlayButton } from '~/components/molecules'
import { colors } from '~/styles/colors'
import { useFavorites } from '~/services/hooks'
import { useDataStore } from '~/services/stores'

export const Hero = ({ item, onDetail }) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, title, subtitle, type } = item

  const checkIsFavorite = async () => {
    setLoading(true)
    const favorites = await getFavorites()
    const isInFavorite = favorites.filter(
      (fv) => fv.id === item.id && fv.type === item.type
    )
    setIsFavorite(isInFavorite.length > 0)
    console.log(isFavorite)

    setLoading(false)
  }

  useEffect(() => {
    checkIsFavorite()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addDataToFavorite = async () => {
    await addFavorite(item)
    checkIsFavorite()
  }

  const removeDataFromFavorite = async () => {
    await removeFavorite(item)
    checkIsFavorite()
  }

  const onPressWatch = () => {
    setSelectedData(item)
    navigation.navigate('Watch')
  }

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <CustomText fontFamily="bold" size={28} mt={8}>
            {title}
          </CustomText>
          <CustomText size={18}>{subtitle}</CustomText>
          <ButtonsView>
            <IconButton
              onPress={() => isFavorite ? removeDataFromFavorite() : addDataToFavorite()}
              label={isFavorite ? 'Rem. Favoritos' : 'Add Favoritos'}
              iconName={isFavorite ? 'remove-circle-outline' : 'add-circle-outline'}
            />
            <PlayButton onPress={onPressWatch}/>
            {!onDetail && (
              <IconButton
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
