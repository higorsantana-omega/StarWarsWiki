import React from 'react'
import { Text } from './styles'

export const CustomText = ({ children, color }) => {
    return (
        <Text color={color} >
            {children}
        </Text>
    )
}