import React from 'react'
import { CustomText } from '../../../components/atoms'
import { TagContainer } from './styles'

export const Tag = ({ children, ...props }) => (
  <TagContainer {...props}>
    <CustomText fontFamily="bold" size={14}>
      {children}
    </CustomText>
  </TagContainer>
)
