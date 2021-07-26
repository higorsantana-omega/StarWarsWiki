
import React from 'react'
import { Text } from './styles'

export const CustomText = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}
