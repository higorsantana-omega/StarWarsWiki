import React from 'react'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
} from './styles'
import { CustomText, Logo } from '~/components/atoms'
import { Tag, IconButton } from '~/components/molecules'
import { colors } from '~/styles/colors'

export const Hero = ({ item, onDetail }) => {
  const { image_url, title, subtitle, type } = item
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
            <IconButton label="Favoritos" iconName="add-circle-outline" />

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
