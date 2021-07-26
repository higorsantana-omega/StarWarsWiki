import React from 'react'
import { PlayContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { CustomText } from '~/components/atoms'
import { theme } from '../../../styles/theme'

export const PlayButton = () => {
  return (
    <PlayContainer>
      <Ionicons
        name="play"
        size={theme.metrics.px(16)}
        color={theme.colors.black}
      />
      <CustomText color="black" fontFamily="bold" size={14}>Play</CustomText>
    </PlayContainer>
  )
}
